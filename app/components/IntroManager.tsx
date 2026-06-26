"use client";

import { useEffect } from "react";

export default function IntroManager() {
  useEffect(() => {
    // If there is a hash in the URL, skip the animation
    if (window.location.hash) {
      document.documentElement.classList.add("skip-animation");
    } else {
      // Lock scroll for 1.5 seconds to prevent scrolling during intro
      document.documentElement.classList.add("intro-lock");
      
      const timer = setTimeout(() => {
        document.documentElement.classList.remove("intro-lock");
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  return null;
}
