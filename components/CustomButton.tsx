"use client";
import React, { MouseEventHandler } from "react";
import Image from "next/image";

const CustomButton = ({
  title,
  styles,
  onTap,
}: {
  title: string;
  styles?: string;
  onTap?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${styles}`}
      onClick={onTap}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
