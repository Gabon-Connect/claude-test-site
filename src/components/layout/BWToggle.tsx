"use client";

import { useEffect, useState } from "react";

export default function BWToggle() {
  const [bw, setBw] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("bw-mode") === "1";
    setBw(saved);
    if (saved) document.documentElement.classList.add("bw");
  }, []);

  function toggle() {
    const next = !bw;
    setBw(next);
    if (next) {
      document.documentElement.classList.add("bw");
      localStorage.setItem("bw-mode", "1");
    } else {
      document.documentElement.classList.remove("bw");
      localStorage.removeItem("bw-mode");
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label={bw ? "Activer les couleurs" : "Mode noir et blanc"}
      title={bw ? "Activer les couleurs" : "Mode noir et blanc"}
      className="text-white/60 hover:text-white text-xs font-semibold border border-white/30 px-2 py-1 rounded transition-colors min-h-[32px] flex items-center gap-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5A623]"
    >
      {bw ? (
        <>
          <span aria-hidden="true">🎨</span>
          <span className="hidden sm:inline">Couleurs</span>
        </>
      ) : (
        <>
          <span aria-hidden="true">◑</span>
          <span className="hidden sm:inline">N&amp;B</span>
        </>
      )}
    </button>
  );
}
