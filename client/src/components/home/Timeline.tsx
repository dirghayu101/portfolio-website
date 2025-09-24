"use client";
import type { Experience  } from "@/static/home/3-experiences";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import { SectionHeader } from "./SectionHeader";

export const Timeline = (data: Experience) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="c-space section-spacing" ref={containerRef}>
      <div className="-mb-4">
      <SectionHeader
        eyebrow={data.sectionEyebrow}
        title={data.sectionTitle}
        description={data.sectionDescription}
      />
      </div>

      <div ref={ref} className="relative pb-20 md:-mt-4  sm:pt-4">
        {data.experienceBody.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky z-5 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-midnight">
                <div className="w-4 h-4 p-2 border rounded-full bg-neutral-800 border-neutral-700" />
              </div>
              <div className="flex-col hidden gap-2 text-xl font-bold md:flex md:pl-20 md:text-4xl text-neutral-100 sm:text-2xl">
                <h3>{item.title}</h3>
                <h3 className="md:text-3xl text-neutral-300 text-lg">{item.job}</h3>
                <h3 className="md:text-3xl text-neutral-500 text-lg">{item.date}</h3>
              </div>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <div className="block mb-4 text-xl font-bold text-left text-neutral-100 md:hidden ">
                <h3>{item.title}</h3>
                <h3 className="text-neutral-300 text-lg py-2">{item.job}</h3>
                <h3 className="text-neutral-500 text-base pb-2">{item.date}</h3>
              </div>
              {item.contents.map((content, index) => (
                <div className="mb-3 text-sm md:text-base text-neutral-400 flex gap-2" key={index}>

                  <span className="flex items-center justify-center w-6 h-6 rounded-full"><CheckCircleIcon className="w-5 h-5" /></span>
                  
                  <span>{content}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-emerald-300 via-emerald-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
