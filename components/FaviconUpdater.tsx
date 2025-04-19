'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@/context/theme-context';

export default function FaviconUpdater() {

  const { currentPrimaryColor } = useTheme();

  const getColorHex = (color: string): string => {
    const colorMap: Record<string, string> = {
      black: "#000000",
      red: "#ef4444",
      orange: "#f97316",
      amber: "#f59e0b",
      yellow: "#eab308",
      lime: "#84cc16",
      green: "#22c55e",
      emerald: "#10b981",
      teal: "#14b8a6",
      cyan: "#06b6d4",
      sky: "#0ea5e9",
      blue: "#3b82f6",
      indigo: "#6366f1",
      violet: "#8b5cf6",
      purple: "#a855f7",
      fuchsia: "#d946ef",
      pink: "#ec4899",
      rose: "#f43f5e",
      slate: "#64748b",
      gray: "#6b7280",
      zinc: "#71717a",
      neutral: "#737373",
      stone: "#78716c",
    };
  
    return colorMap[color] || "#6b7280"; 
  };

  const hexColor = getColorHex(currentPrimaryColor);

  const [faviconUrl, setFaviconUrl] = useState<string | null>(null);

  useEffect(() => {

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${hexColor}"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bolt-icon lucide-bolt"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><circle cx="12" cy="12" r="4"/></svg>
    `;
    const newFaviconUrl = `data:image/svg+xml;base64,${btoa(svg)}`;
    setFaviconUrl(newFaviconUrl);

    const link = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;
    if (link) {
      link.href = `${newFaviconUrl}?t=${Date.now()}`;
    } else {
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      newLink.type = 'image/svg+xml';
      newLink.href = `${newFaviconUrl}?t=${Date.now()}`;
      document.head.appendChild(newLink);
    }

}, [currentPrimaryColor]);



  if (!faviconUrl) return null;

  return <link rel="icon" type="image/svg+xml" href={faviconUrl} />;
  
}