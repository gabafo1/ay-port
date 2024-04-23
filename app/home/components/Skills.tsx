"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiAzureartifacts,
  SiDjango,
  SiGit,
  SiJavascript,
  SiLinux,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      text: "Javascript",
      Icon: SiJavascript,
    },
    {
      text: "Python",
      Icon: SiPython,
    },
    {
      text: "Django",
      Icon: SiDjango,
    },
    {
      text: "Azure",
      Icon: SiAzureartifacts,
    },
    {
      text: "Git",
      Icon: SiGit,
    },
    {
      text: "Linux",
      Icon: SiLinux,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8 dark:bg-black bg-white">
      <Title
        text="Skills 🔪"
        className="flex flex-col items-center justify-center -rotate-6 text-primary"
      />
      <div className="dark:bg-black bg-white">
        <HoverEffect items={skills} />
      </div>
    </div>
  );
}
