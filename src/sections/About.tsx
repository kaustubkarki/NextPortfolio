"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import BookImage from "@/assets/images/book-cover.jpg";
import mapImage from "@/assets/images/map1.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import Github from "@/assets/icons/github.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import PythonIcon from "@/assets/icons/python.svg";
import NodeIcon from "@/assets/icons/node.svg";
import { CardHeader } from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "GitHub",
    iconType: Github,
  },
  {
    title: "Python",
    iconType: PythonIcon,
  },
  {
    title: "TypeScript",
    iconType: TypeScriptIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Node",
    iconType: NodeIcon,
  },
];

const hobbies = [
  {
    title: "Reading",
    emoji: "📖",
    left: "5%",
    top: "5%",
  },
  {
    title: "Football",
    emoji: "⚽",
    left: "50%",
    top: "5%",
  },
  {
    title: "Bike Ride",
    emoji: "🏍️",
    left: "35%",
    top: "40%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "10%",
    top: "35%",
  },
  {
    title: "Games",
    emoji: "🎮",
    left: "70%",
    top: "45%",
  },
  {
    title: "Music",
    emoji: "🎸",
    left: "5%",
    top: "65%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♂️",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constrainRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container" id="about">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and What Inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            {/* card 1 book */}
            <Card className="h-[320px] md:col-span-2 lg:col-span-1 ">
              <CardHeader
                title="My Reads"
                description=" Explore the books that shape my perspective."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={BookImage} alt="book image" />
              </div>
            </Card>

            {/* card 2 toolbox */}
            <Card className="h-[320px]  md:col-span-3 lg:col-span-2 ">
              <CardHeader
                title="My Toolbox"
                description=" Explore the technologies and tools I use to craft exceptional digital experiences."
                className=""
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemWrapperClassName="animate-move-right [animation-duration:30s]"
              />
              {/* DRY: DO-NOT REPEAT YOURSELF */}
            </Card>
          </div>

          {/* card 3 Hobbies  */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constrainRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constrainRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* card 4 MAPS  */}
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1 ">
              <Image
                src={mapImage}
                alt="image"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0  after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <div className="absolute inset-0 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <Image src={smileMemoji} alt="smile memo" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};