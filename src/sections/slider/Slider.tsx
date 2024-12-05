"use client";

import React, { useState } from "react";
import "./slider.css";
import card1 from "@/assets/images/cards/card1.png";
import card2 from "@/assets/images/cards/card2.png";
import card3 from "@/assets/images/cards/card3.png";
import card4 from "@/assets/images/cards/card4.png";
import card5 from "@/assets/images/cards/card5.png";
import card6 from "@/assets/images/cards/card6.png";
import card7 from "@/assets/images/cards/card7.png";
import heroMain from "@/assets/images/cards/heroMain.png";

import Image from "next/image";

type Props = {};

export const Slider = (props: Props) => {
  const [quantity, setQuantity] = useState(7);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [hoverTimer, setHoverTimer] = useState<NodeJS.Timeout | null>(null);

  // Array of images to render in the slider
  const images = [card1, card2, card3, card4, card5, card6, card7];

  const handleMouseEnter = () => {
    // Clear any existing timer to avoid unwanted pauses
    if (hoverTimer) {
      clearTimeout(hoverTimer);
    }

    // Set a timeout to update the hover state after 500ms
    const timer = setTimeout(() => {
      setIsHovered(true);
    }, 500); // Delay before pausing

    setHoverTimer(timer);
  };

  const handleMouseLeave = () => {
    // Clear the timer if mouse leaves before it fires
    if (hoverTimer) {
      clearTimeout(hoverTimer);
    }
    setIsHovered(false); // Reset hover state immediately
  };

  return (
    <div
      className="[mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]"
      
    >
      <div
        className={`banner ${isHovered ? "paused" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="slider"
          style={{ "--quantity": quantity } as React.CSSProperties}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ "--position": index } as React.CSSProperties} // Set a unique --position variable
            >
              <Image
                src={image}
                alt={`card no${index + 1}`}
                layout="responsive"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
        <div className="content">
          <h1 data-content="KAUSTUB">KAUSTUB</h1>
          <div className="author">
            <h2>FullStack</h2>
            <p>
              <b>Developer</b>
            </p>
            <p>Thankyou for taking time for going through my work.</p>
          </div>
          <div
            style={{ backgroundImage: `url(${heroMain.src})` }}
            className="model"
          ></div>
        </div>
      </div>
    </div>
  );
};

//
