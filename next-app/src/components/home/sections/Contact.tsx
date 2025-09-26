"use client";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { CONTACT_CTA } from "@/static/home/2-footerItems";
import { useState } from "react";
import { ContactFormModal } from "@/components/home/ContactFormModal";
import Link from "next/link";

export const ContactSection = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <div className="py-16 pt-12 lg:py-24 lg:pt-20 z-12">
        <div className="container">
          <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
            <div
              className="absolute inset-0 opacity-5 -z-10"
              style={{ backgroundImage: `url(${grainImage.src})` }}
            ></div>
            <div className="flex flex-col gap-8 md:flex-row md:gap-16 items-center">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl">
                  {CONTACT_CTA.heading}
                </h2>
                <p className="text-sm mt-2 md:text-base">
                  {CONTACT_CTA.description}
                </p>
              </div>
              <div>
                <Link
                  href="#"
                  onClick={() => setContactOpen(true)}
                  className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-950"
                >
                  <span className="font-semibold">Contact Me</span>
                  <ArrowUpRightIcon className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactFormModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
};
