import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    
    // Get folder ID from query param, fallback to environment variable
    const folderId =
      searchParams.get("folderId") ||
      process.env.RECAP_GDRIVE_FOLDER_ID ||
      process.env.GDRIVE_FOLDER_ID ||
      process.env.NEXT_PUBLIC_GDRIVE_FOLDER_ID ||
      "";

    if (!folderId || folderId === "YOUR FOLDER ID") {
      return NextResponse.json(
        {
          error:
            "Folder ID is required. Please provide it as a query parameter (?folderId=...) or set RECAP_GDRIVE_FOLDER_ID / GDRIVE_FOLDER_ID / NEXT_PUBLIC_GDRIVE_FOLDER_ID in environment variables.",
        },
        { status: 400 }
      );
    }

    const url = `https://drive.google.com/drive/folders/${folderId}`;

    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
      },
      next: { revalidate: 3600 }, // Cache the result for 1 hour
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch Google Drive page: ${response.statusText}` },
        { status: response.status }
      );
    }

    const html = await response.text();

    const regex = /data-id="([^"]+?)".*?data-tooltip="([^"]+?)"/g;
    const imageRegex = /image\s*$/i;
    const matches = [...html.matchAll(regex)].filter((match) => imageRegex.test(match[2]));

    let fileList = matches.map((match) => ({
      id: match[1],
      name: match[2],
      thumbnailUrl: `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1000`,
      downloadUrl: `https://drive.google.com/uc?export=download&id=${match[1]}`,
    }));

    // Fallback: If no files were found via the direct data-id regex, try parsing Google Drive's bootstrap JSON structure
    if (fileList.length === 0) {
      // Find all string arrays that look like file/folder entries in Google Drive's bootstrap data.
      // Typically: ["fileId", "fileName", ...] or similar patterns inside script tags.
      const idNameRegex = /"([a-zA-Z0-9_-]{28,40})","([^"]+?\.(?:jpg|jpeg|png|gif|webp|mp4|webm))"/gi;
      const bootstrapMatches = [...html.matchAll(idNameRegex)];
      
      const uniqueFiles = new Map<string, string>();
      for (const match of bootstrapMatches) {
        uniqueFiles.set(match[1], match[2]);
      }
      
      fileList = Array.from(uniqueFiles.entries()).map(([id, name]) => ({
        id,
        name,
        thumbnailUrl: `https://drive.google.com/thumbnail?id=${id}&sz=w1000`,
        downloadUrl: `https://drive.google.com/uc?export=download&id=${id}`,
      }));
    }

    [fileList[0], fileList[1]] = [fileList[1], fileList[0]];

    return NextResponse.json(fileList);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
