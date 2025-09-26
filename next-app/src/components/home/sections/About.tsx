'use client';
import { Card } from "@/components/home/Card";
import { SectionHeader } from "@/components/home/SectionHeader";
import Image from "next/image";
import { useRef, useState } from "react";
import { CardHeader } from "@/components/home/CardHeader";
import { ToolBoxItems } from "@/components/home/ToolboxItems";
import {motion} from 'framer-motion'
import { ABOUT } from "@/static/home/7-about";
import { Modal } from "@/components/home/Modal";
import { BookDetails } from "@/components/home/BookDetails";
import { ToolsDetails } from "@/components/home/ToolsDetails";


export const AboutSection = () => {
  const constraintRef = useRef(null)
  const [openBookModal, setOpenBookModal] = useState(false);
  const [openToolsModal, setOpenToolsModal] = useState(false);
  
  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          {...ABOUT.sectionHeader}
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            {/* Book Section */}
          <Card className="h-[320px] md:col-span-2 lg:col-span-1 hover:cursor-pointer" onClick={() => setOpenBookModal(true)}>
            <CardHeader
              {...ABOUT.bookSection}
            />
            <div className="w-40 mx-auto mt-2 md:mt-0">
              <Image src={ABOUT.bookImage} alt="Book Cover" />
            </div>
          </Card>
          <Modal isOpen={openBookModal} onClose={() => setOpenBookModal(false)}>
           <BookDetails/>
          </Modal>

          {/* Toolbox Section */}
          <Card className="h-[320px] md:col-span-3 lg:col-span-2 hover:cursor-pointer"  onClick={() => setOpenToolsModal(true)}>
            <CardHeader
              {...ABOUT.toolboxSection}
            />
            <ToolBoxItems items={ABOUT.toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:25s]"/>
            <ToolBoxItems
              items={ABOUT.toolboxItems}
              className="mt-6"
              itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:12s]"
            />
          </Card>
          <Modal isOpen={openToolsModal} onClose={() => setOpenToolsModal(false)}>
           <ToolsDetails/>
          </Modal>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader
              {...ABOUT.hobbySection}
              className="px-6 py-6"
            />
            <div className="relative flex-1" ref={constraintRef}>
              {ABOUT.hobbyList.map((hobby) => (
                <motion.div
                  key={hobby.title}
                  className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                  drag
                  dragConstraints={constraintRef}
                >
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <Image
              src={ABOUT.locationMap}
              alt="map"
              className="h-full w-full object-cover object-left-top"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:1.25s]"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
              <Image
                src={ABOUT.mapMemojiIcon}
                alt="smiling memoji"
                className="size-20"
              />
            </div>
          </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
