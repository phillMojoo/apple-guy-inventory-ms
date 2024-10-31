"use client";

import { Menu } from "lucide-react";

export function TopNav() {
  return (
    <div className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-6 sm:px-6 lg:px-8">
      <button
        type="button"
        className="lg:hidden -m-2.5 p-2.5 text-gray-700"
        onClick={() => document.dispatchEvent(new CustomEvent("toggle-mobile-menu"))}
      >
        <Menu className="h-6 w-6" />
      </button>
      
      <div className="flex flex-1 gap-4 items-center justify-end">
        <span className="text-sm text-gray-500">Welcome back</span>
      </div>
    </div>
  );
}