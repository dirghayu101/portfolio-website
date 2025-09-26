"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { NAVBAR_ITEMS } from "@/static/home/1-navItems";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { ContactFormModal } from "./ContactFormModal";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Sort items and split Home from the rest
  const menuItems = NAVBAR_ITEMS.sort(
    (a, b) => a.sequenceNumber - b.sequenceNumber
  );

  return (
    <div className="flex justify-center items-center sticky md:top-6 top-0 w-full z-10">
      <nav className="relative flex items-center justify-between p-0.5 border border-white/15 md:rounded-full bg-white/10 backdrop-blur w-full nav:w-auto nav:h-auto">
        {/* Left: Home button */}
        <Link href="/" className="nav-item flex-1 justify-start">
          Home
        </Link>

        <Link
          href="#"
          onClick={() => setContactOpen(true)}
          className="md:flex hidden nav-item"
        >
          Contact
        </Link>

     <ContactFormModal open={contactOpen} onClose={() => setContactOpen(false)} />
        {/* Hamburger for small screens */}
        <button
          className="flex nav:hidden items-center justify-center w-10 h-10 rounded-full hover:bg-white/20 transition ml-auto"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Menu items for medium and up */}
        <div className="hidden nav:flex gap-1 flex-1 justify-end">
          {menuItems.map((item) => (
            <Link
              key={item.sequenceNumber}
              href={item.href}
              className={twMerge("nav-item", item.classes ?? "")}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </nav>

      {/* Fullscreen Modal via Portal */}
      {mounted &&
        open &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex flex-col bg-black/40 nav:hidden"
            style={{ backdropFilter: "blur(4px)" }}
          >
            <div
              className="flex-1 flex flex-col justify-center items-center w-full h-full animate-fadeIn bg-white/10"
              style={{
                background: "rgba(255,255,255,0.10)",
                backdropFilter: "blur(8px)",
              }}
            >
              <button
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-100 transition"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <svg
                  width="28"
                  height="28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-neutral-200  hover:text-black"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <div className="flex flex-col gap-4 w-3/4 max-w-xs">
                <Link
                  href="#"
                  onClick={() => setContactOpen(true)}
                  className="nav-item w-full text-center text-lg"
                >
                  Contact
                </Link>

                {menuItems.map((item) => (
                  <Link
                    key={item.sequenceNumber}
                    href={item.href}
                    className={twMerge(
                      "nav-item w-full text-center text-lg",
                      item.classes ?? ""
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <style jsx>{`
              @keyframes fadeIn {
                0% {
                  opacity: 0;
                }
                100% {
                  opacity: 1;
                }
              }
              .animate-fadeIn {
                animation: fadeIn 0.25s cubic-bezier(0.4, 0, 0.2, 1);
              }
            `}</style>
          </div>,
          document.body
        )}
    </div>
  );
};
