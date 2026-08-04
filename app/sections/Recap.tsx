"use client";

import { useEffect, useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import Image from "next/image";

interface GDriveFile {
  id: string;
  name: string;
  thumbnailUrl: string;
  downloadUrl: string;
}

interface RecapItem {
  id: string;
  title: string;
  image: string;
  alt: string;
}

const fallbackItems: RecapItem[] = [
  {
    id: "1",
    title: "",
    image: "",
    alt: "",
  },
  {
    id: "2",
    title: "",
    image: "",
    alt: "",
  },
  {
    id: "3",
    title: "",
    image: "",
    alt: "",
  },
];

export default function Recap() {
  const [items, setItems] = useState<RecapItem[]>(fallbackItems);

  useEffect(() => {
    async function fetchGdriveFiles() {
      try {
        const folderId =
          process.env.NEXT_PUBLIC_RECAP_GDRIVE_FOLDER_ID ||
          process.env.RECAP_GDRIVE_FOLDER_ID ||
          process.env.NEXT_PUBLIC_GDRIVE_FOLDER_ID;
        const url = folderId
          ? `/api/gdrive-grabber?folderId=${folderId}`
          : "/api/gdrive-grabber";
        const response = await fetch(url);
        if (!response.ok)
          throw new Error("Failed to fetch from gdrive-grabber");

        const files: GDriveFile[] = await response.json();
        if (files && files.length > 0) {
          const mappedItems = files.map((file) => ({
            id: file.id,
            title: file.name.slice(0, -5).trimEnd(),
            image: `https://lh3.googleusercontent.com/d/${file.id}`,
            alt: file.name,
          }));

          // Make sure we have at least 3 items, fallback if less
          const finalItems = [...mappedItems];
          while (finalItems.length < 3) {
            finalItems.push(fallbackItems[finalItems.length]);
          }

          setItems(finalItems);
        }
      } catch (err) {
        console.error(
          "Failed to load Google Drive files for Recap, using fallbacks:",
          err,
        );
      }
    }

    fetchGdriveFiles();
  }, []);

  return (
    <section className="py-20 md:py-24 px-6 bg-primary text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(109,221,136,0.2),transparent_50%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-(family-name:--font-jakarta) text-[32px] md:text-[48px] font-extrabold mb-4">
            Jejak Langkah Telepati
          </h2>
          <p className="font-(family-name:--font-inter) text-lg text-white/80 max-w-2xl mx-auto">
            Melihat kembali antusiasme dan inovasi luar biasa dari para finalis
            di tahun sebelumnya.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-100">
          {items.slice(0, 3).map((item, index) => {
            const isBig = index === 0;
            return (
              <ScrollReveal
                key={item.id}
                className={`bento-card rounded-2xl overflow-hidden border-2 border-on-surface relative group h-[240px] md:h-auto ${
                  isBig
                    ? "md:col-span-2 md:row-span-2"
                    : "md:col-span-1 md:row-span-1"
                }`}
              >
                {item.image.length === 0 ? (
                  <p>Not Found</p>
                ) : (
                  <Image
                    src={item.image}
                    alt={item.alt}
                    sizes="100%"
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}

                <div className="absolute inset-0 bg-linear-to-t from-on-surface/80 to-transparent" />
                <div
                  className={`absolute ${
                    isBig ? "bottom-6 left-6" : "bottom-4 left-4"
                  }`}
                >
                  <h3
                    className={`font-(family-name:--font-jakarta) font-bold ${
                      isBig ? "text-2xl" : "text-lg md:text-xl"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
