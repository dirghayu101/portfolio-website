"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  // Handle Escape key close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalStyle;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose} // click outside closes modal
      />

      {/* Modal box */}
      <div
        className="relative z-50 w-[95%] h-[90%] md:w-[80%] md:h-[90%] rounded-lg shadow-2xl overflow-hidden flex flex-col bg-gray-900 text-white"
      >
        {/* Close button */}
        <div className="flex justify-end p-2">

        <button
          onClick={onClose}
          className="group z-50 rounded-full hover:bg-neutral-100 transition p-2"
          aria-label="Close modal"
          >
          <X className="w-6 h-6 text-neutral-200 group-hover:text-black" />
        </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto container">{children}</div>
      </div>
    </div>
  );
};
