"use client";

import React, { useEffect } from "react";

export type AlertType = "success" | "warning" | "error" | "info";

interface CustomAlertProps {
  isOpen: boolean;
  message: string;
  type?: AlertType;
  onClose: () => void;
  autoCloseMs?: number;
}

export default function CustomAlert({
  isOpen,
  message,
  type = "info",
  onClose,
  autoCloseMs = 4000,
}: CustomAlertProps) {
  useEffect(() => {
    if (isOpen && autoCloseMs > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseMs);
      return () => clearTimeout(timer);
    }
  }, [isOpen, autoCloseMs, onClose]);

  if (!isOpen) return null;

  const typeStyles = {
    success: {
      bg: "bg-emerald-50 border-emerald-200 text-emerald-900",
      badgeBg: "bg-emerald-600 text-white",
      icon: (
        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    warning: {
      bg: "bg-amber-50 border-amber-200 text-amber-900",
      badgeBg: "bg-amber-600 text-white",
      icon: (
        <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
    error: {
      bg: "bg-red-50 border-red-200 text-red-900",
      badgeBg: "bg-red-600 text-white",
      icon: (
        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      ),
    },
    info: {
      bg: "bg-blue-50 border-blue-200 text-blue-900",
      badgeBg: "bg-blue-600 text-white",
      icon: (
        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  };

  const style = typeStyles[type] || typeStyles.info;

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4 animate-in fade-in slide-in-from-top-4 duration-300">
      <div className={`p-4 rounded-2xl border shadow-xl flex items-start gap-3 backdrop-blur-md ${style.bg}`}>
        <div className="p-1 rounded-full bg-white/80 shadow-sm shrink-0 mt-0.5">
          {style.icon}
        </div>
        <div className="flex-1 text-xs md:text-sm font-semibold leading-relaxed">
          {message}
        </div>
        <button
          type="button"
          onClick={onClose}
          className="text-gray-400 hover:text-gray-700 p-1 rounded-lg transition-colors cursor-pointer shrink-0"
          aria-label="Tutup"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
