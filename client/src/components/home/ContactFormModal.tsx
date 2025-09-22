"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { fetchUrl } from "@/lib/utilities/general-utils";
import { set } from "zod";
import { twMerge } from "tailwind-merge";

type ContactFormModalProps = {
  open: boolean;
  onClose: () => void;
};

export const ContactFormModal = ({ open, onClose }: ContactFormModalProps) => {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [submitResponse, setSubmitResponse] = useState<string | null>(null);
  const [error, setError] = useState<boolean | null>(null);
  const [sending, setSending] = useState(false);

  // Ensure component is mounted before rendering (for portals)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Escape key to close
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  // Prevent background scroll
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    setSending(true);

    e.preventDefault();
    console.log("Form submitted:", { name, email, message });

    try {
      const result = await fetch(`${fetchUrl}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      if(result.status === 200){
        setError(false);
        setSubmitResponse("Thank you for your message!");
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error("Error:", error);
      setError(true);
      setSubmitResponse("Failed to send message. Please try again later.");
    }

    setSending(false);

    setEmail("");
    setMessage("");
    setName("");

    setTimeout(() => {
      setSubmitResponse(null);
      setError(null);
      onClose();
    }, 1800);
  };

  if (!mounted || !open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 sm:m-2"
      style={{ backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="relative animate-fadeIn bg-white/10 rounded-xl p-6 w-full max-w-md"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-100 transition"
          aria-label="Close modal"
          onClick={onClose}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-neutral-700"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <h2 className="text-lg font-semibold mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            required
            placeholder="Your name"
            className="border border-gray-300 rounded-md px-3 py-2 font-normal text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 text-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            required
            placeholder="Your email"
            className="border border-gray-300 rounded-md px-3 py-2 font-normal text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            required
            placeholder="Your message"
            rows={4}
            className="border border-gray-300 rounded-md px-3 py-2 font-normal text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 text-black"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className={twMerge(
              "w-full bg-emerald-600 text-white font-medium rounded-md px-4 py-2 transition-colors duration-200 hover:bg-emerald-700 focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500",
              sending && "opacity-50 cursor-not-allowed"
            )}
          >
            {sending ? "Sending..." : "Send"}
          </button>
          <div
            id="email-error"
            aria-label="polite"
            aria-atomic="true"
            className="px-1 text-center"
          >
            {error === true && (
              <p className="text-xs text-red-500">{submitResponse}</p>
            )}
            {error === false && (
              <p className="text-xs text-green-500">{submitResponse}</p>
            )}
          </div>
        </form>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>,
    document.body
  );
};
