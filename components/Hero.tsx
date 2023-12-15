"use client";
import React from "react";
import Image from "next/image";
import { CustomButton } from "./index";

const Hero = () => {
  function handleScroll() {}
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, Book or Rent a car -- quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with out effortless booking
          process
        </p>

        <CustomButton
          title="Explore Cars"
          styles="bg-primary-blue text-white rounded-full mt-10"
          onTap={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
          <div className="hero__image-overlay">
            <Image src="/hero-bg.png" alt="hero-bg" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
