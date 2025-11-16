'use client';

import { FC } from "react";
import { useRouter } from "next/navigation";

type LinkButtonProps = {
  link?: string;
  text: string;
  isInverted: boolean;
  scrollTarget?: string; // Add optional scroll target
  internalUrl?: string; // Add optional internal URL parameter
};

export const LinkButton: FC<LinkButtonProps> = ({
  link,
  text,
  isInverted = false,
  scrollTarget = "home", // Default scroll target
  internalUrl,
}) => {
  const router = useRouter();

  const buttonClasses = isInverted
    ? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-3 px-6 rounded-xl hover:rounded-2xl hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-500/40 border border-blue-500/20 hover:border-blue-400/40 backdrop-blur-sm transition-all duration-300 ease-out cursor-pointer transform hover:-translate-y-1"
    : "bg-blue-900/20 hover:bg-blue-800/40 active:bg-blue-700/60 text-blue-300 hover:text-white font-semibold py-3 px-6 border-2 border-blue-400/60 hover:border-blue-300/80 rounded-xl hover:rounded-2xl hover:scale-105 active:scale-95 backdrop-blur-sm shadow-md shadow-blue-900/20 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300 ease-out cursor-pointer transform hover:-translate-y-1";

  const handleScrollToSection = () => {
    const element = document.getElementById(scrollTarget);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleClick = () => {
    if (internalUrl) {
      router.push(internalUrl);
    } else {
      handleScrollToSection();
    }
  };

  // If internal URL is provided, render navigation button
  if (internalUrl) {
    return (
      <button
        className={buttonClasses}
        onClick={handleClick}
      >
        {text}
      </button>
    );
  }

  // If no link is provided or link is empty, render scroll button
  if (!link || link.trim() === "") {
    return (
      <button
        className={buttonClasses}
        onClick={handleScrollToSection}
      >
        {text}
      </button>
    );
  }

  // If link is provided, render as external link
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer external"
    >
      <button className={buttonClasses}>
        {text}
      </button>
    </a>
  );
};
