"use client";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import style from "./theme-switch.module.css";
import { useTheme } from "@/context/theme-context";



export default function ThemeSwitch() {
  const {theme, toggleTheme} = useTheme();

  return (
    <button
      className={style.button}

      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
