"use client";

import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import { agriDataEvents, agroIoT } from "../utils/timelines";

export default function Timeline() {
  const [activeTab, setActiveTab] = useState<"agriTech" | "agriData">(
    "agriTech",
  );

  const activeEvents = activeTab === "agriTech" ? agroIoT : agriDataEvents;

  return (
    <ScrollReveal
      id="timeline"
      className="py-20 md:py-24 px-6 max-w-6xl mx-auto"
    >
      <div className="text-center mb-10">
        <h2 className="font-(family-name:--font-jakarta) text-[24px] leading-[1.3] font-bold md:text-[32px] md:leading-[1.2] text-on-surface mb-4">
          Timeline Kegiatan
        </h2>
        <p className="font-(family-name:--font-inter) text-[16px] leading-[1.6] text-on-surface-variant max-w-2xl mx-auto">
          Catat tanggal pentingnya dan pastikan tim kamu tidak tertinggal.
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="flex justify-center gap-4 mb-12">
        <button
          onClick={() => setActiveTab("agriTech")}
          className={`cursor-pointer px-5 py-3 rounded-xl font-bold font-(family-name:--font-jakarta) border-2 border-[#061E14] transition-all duration-300 hover:-translate-x-px hover:-translate-y-px ${
            activeTab === "agriTech"
              ? "bg-primary text-white shadow-[4px_4px_0px_#061E14] hover:shadow-[5px_5px_0px_#061E14]"
              : "bg-[#e8fff0] text-[#061E14] shadow-[2px_2px_0px_#061E14] hover:shadow-[3px_3px_0px_#061E14] opacity-80 hover:opacity-100"
          }`}
        >
          AgroIoT
        </button>
        <button
          onClick={() => setActiveTab("agriData")}
          className={`cursor-pointer px-5 py-3 rounded-xl font-bold font-(family-name:--font-jakarta) border-2 border-[#061E14] transition-all duration-300 hover:-translate-x-px hover:-translate-y-px ${
            activeTab === "agriData"
              ? "bg-secondary-container text-[#061E14] shadow-[4px_4px_0px_#061E14] hover:shadow-[5px_5px_0px_#061E14]"
              : "bg-[#fefce8] text-[#061E14] shadow-[2px_2px_0px_#061E14] hover:shadow-[3px_3px_0px_#061E14] opacity-80 hover:opacity-100"
          }`}
        >
          AgriData
        </button>
      </div>

      {/* Horizontal Timeline Container (Desktop) */}
      <div className="relative w-full mx-auto py-20 hidden md:block overflow-x-auto scrollbar-hide">
        <style>
          {`
            .scrollbar-hide::-webkit-scrollbar { display: none; }
            .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            .animate-fade-in {
              animation: fadeIn 0.4s ease-out forwards;
            }
          `}
        </style>
        <div
          key={activeTab}
          className="relative min-w-[1600px] px-6 animate-fade-in"
        >
          <div className="absolute top-1/2 left-0 w-full h-1 bg-[#061E14]/20 -translate-y-1/2 rounded-full" />
          <div className="relative z-10 flex justify-between items-center w-full">
            {activeEvents.map((event, idx) => {
              const isTop = idx % 2 === 0;
              const isPrimary = idx % 2 === 0;
              const bgColor = isPrimary ? "bg-[#e8fff0]" : "bg-[#fefce8]";
              const borderColor = isPrimary
                ? "border-primary"
                : "border-secondary-container";
              const shadowClass = isPrimary
                ? "shadow-[0_0_15px_rgba(0,107,48,0.6)]"
                : "shadow-[0_0_15px_rgba(253,196,37,0.6)]";

              return (
                <div
                  key={idx}
                  className={`flex flex-col items-center group w-64 relative ${isTop ? "top-[-60px]" : "top-[60px]"}`}
                >
                  {isTop ? (
                    <>
                      <div
                        className={`bento-card p-4 rounded-xl text-center w-full shadow-sm hover:-translate-y-1 hover:shadow-[3px_3px_0px_#061E14] transition-all border-2 border-[#061E14] ${bgColor} mb-4`}
                      >
                        <h4 className="font-(family-name:--font-jakarta) font-bold text-on-surface mb-1">
                          {event.title}
                        </h4>
                        <p className="font-(family-name:--font-inter) text-xs text-on-surface-variant">
                          {event.date}
                        </p>
                      </div>
                      <div
                        className={`w-6 h-6 rounded-full bg-white border-4 ${borderColor} z-10 ${shadowClass} group-hover:scale-125 transition-transform`}
                      />
                    </>
                  ) : (
                    <>
                      <div
                        className={`w-6 h-6 rounded-full bg-white border-4 ${borderColor} z-10 ${shadowClass} group-hover:scale-125 transition-transform mb-4`}
                      />
                      <div
                        className={`bento-card p-4 rounded-xl text-center w-full shadow-sm hover:-translate-y-1 hover:shadow-[3px_3px_0px_#061E14] transition-all border-2 border-[#061E14] ${bgColor}`}
                      >
                        <h4 className="font-(family-name:--font-jakarta) font-bold text-on-surface mb-1">
                          {event.title}
                        </h4>
                        <p className="font-(family-name:--font-inter) text-xs text-on-surface-variant">
                          {event.date}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Timeline (Vertical fallback) */}
      <div
        key={`mobile-${activeTab}`}
        className="md:hidden flex flex-col gap-8 relative border-l-2 border-[#061E14]/20 ml-4 pl-8 animate-fade-in"
      >
        {activeEvents.map((event, idx) => {
          const isPrimary = idx % 2 === 0;
          const bgColor = isPrimary ? "bg-[#e8fff0]" : "bg-[#fefce8]";
          const borderColor = isPrimary
            ? "border-primary"
            : "border-secondary-container";
          const shadowClass = isPrimary
            ? "shadow-[0_0_10px_rgba(0,107,48,0.6)]"
            : "shadow-[0_0_10px_rgba(253,196,37,0.6)]";

          return (
            <div key={idx} className="relative">
              <div
                className={`absolute -left-[41px] top-2 w-5 h-5 rounded-full bg-white border-4 ${borderColor} z-10 ${shadowClass}`}
              />
              <div
                className={`bento-card p-4 rounded-xl shadow-sm border-2 border-[#061E14] ${bgColor}`}
              >
                <span className="inline-block px-3 py-1 bg-white border border-[#061E14] rounded-full text-[10px] font-bold mb-2">
                  {event.date}
                </span>
                <h4 className="font-(family-name:--font-jakarta) font-bold text-on-surface mb-1">
                  {event.title}
                </h4>
                <p className="font-(family-name:--font-inter) text-sm text-on-surface-variant">
                  {event.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </ScrollReveal>
  );
}
