"use client";

import React from "react";
import meOnline from "@/assets/images/meOnline.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import TwoPlanet from "@/assets/icons/twoPlanet.svg";
import Mars from "@/assets/icons/mars.svg";
import Earth from "@/assets/icons/earth.svg";
import Saturn from "@/assets/icons/saturn.svg";
import Satellite from "@/assets/icons/satellite.svg";
import Rocket from "@/assets/icons/lander.svg";
import BulbPlanet from "@/assets/icons/bulb.svg";
import SpaceShuttle from "@/assets/icons/space.svg";

export const HeroSection = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="py-32 md:py-48 lg:py:60 relative z-0 overflow-x-clip"
      id="home"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className=" size-[620px] hero-ring"></div>
        <div className=" size-[820px] hero-ring"></div>
        <div className=" size-[1020px] hero-ring"></div>
        <div className=" size-[1220px] hero-ring"></div>

        {/*   shouldOrbit?: boolean;
              orbitDuration?: string;
              shouldSpin?: boolean;
              spinDuration?: string; */}

        <HeroOrbit
          size={530}
          rotation={22}
          shouldOrbit
          orbitDuration="60s"
          shouldSpin
          spinDuration="14s"
        >
          <Earth className="size-16 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit
          size={540}
          rotation={28}
          shouldOrbit
          orbitDuration="58s"
          shouldSpin
          spinDuration="12s"
        >
          <Satellite className="size-8 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit
          size={1000}
          rotation={-72}
          shouldOrbit
          orbitDuration="60s"
          shouldSpin
          spinDuration="40s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit
          size={720}
          rotation={85}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="8s"
        >
          <TwoPlanet className="size-12 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="42s">
          <div className="size-14 rounded-full text-emerald-300/20"></div>
        </HeroOrbit>

        <HeroOrbit
          size={650}
          rotation={-5}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="8s"
        >
          <Mars className="size-8 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={890}
          rotation={98}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="45s"
        >
          <Saturn className="size-20 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="8s"
        >
          <Rocket className="size-6 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={520}
          rotation={-42}
          shouldOrbit
          orbitDuration="28s"
          shouldSpin
          spinDuration="8s"
        >
          <BulbPlanet className="size-2 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={440}
          rotation={-80}
          shouldOrbit
          orbitDuration="32s"
          spinDuration="8s"
        >
          <SpaceShuttle className="size-5 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="20s"
          shouldSpin
          spinDuration="8s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={meOnline} className="size-[200px]" alt="laptop man" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="absolute bg-green-500 inset-0 animate-ping-large rounded-full"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-3 tracking-wide">
            Full-Snack developer Interactive Artist
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-large">
            I&apos;m a full-stack developer with a passion for transforming
            designs into high-performing, functional web applications. Let’s
            discuss how we can bring your next project to life
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 ">
        <button
          onClick={() => handleScroll("projects")}
          className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl cursor-pointer"
          style={{ zIndex: 10, position: "relative" }}
        >
          <span className="font-semibold">Explore My Work</span>
          <ArrowDown className="size-4" />
        </button>

        <button
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/kaustubkarki/",
              "_blank",
              "noopener,noreferrer"
            )
          }
          className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl"
          style={{ zIndex: 10, position: "relative" }}
        >
          <span>👋</span>
          <span className="font-semibold">Let&apos;s Connect</span>
        </button>
      </div>
    </div>
  );
};
