"use client";

import { useState } from "react";
import skills from "@/data/skills.json";
import SkillCard from "./SkillCard";
import type { Skill } from "@/types/skillType";
import {
  FaLaptopCode,
  FaTerminal,
  FaCloudUploadAlt,
  FaPalette,
  FaLayerGroup,
} from "react-icons/fa";

const typedSkills: Skill[] = skills;

const categoryMeta = [
  {
    name: "Frontend Development",
    icon: FaLaptopCode,
    description: "Modern web standards, responsive UI, and component libraries",
  },
  {
    name: "Programming Languages",
    icon: FaTerminal,
    description: "Core algorithmic thinking and general-purpose programming",
  },
  {
    name: "Tools & Deployment",
    icon: FaCloudUploadAlt,
    description: "Version control, cloud platforms, and deployment workflows",
  },
  {
    name: "Design & Productivity",
    icon: FaPalette,
    description: "UI/UX design, visual prototyping, and data management",
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    ...categoryMeta.map((cat) => cat.name),
  ];

  const filteredCategories =
    activeCategory === "All"
      ? categoryMeta
      : categoryMeta.filter((cat) => cat.name === activeCategory);

  return (
    <section id="skills" className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            My Expertise
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Skills &amp; <span className="text-primary">Technologies</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-base-content/70 sm:text-base">
            Categorized technical stack and tools I use to build scalable web
            applications, design interfaces, and manage development workflows.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            const count =
              category === "All"
                ? typedSkills.length
                : typedSkills.filter((s) => s.category === category).length;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`btn btn-sm sm:btn-md rounded-full px-4 font-medium transition-all duration-200 ${
                  isActive
                    ? "btn-primary shadow-md scale-105"
                    : "border-base-300 bg-base-200/60 hover:border-primary/50 hover:bg-base-200"
                }`}
              >
                {category === "All" && <FaLayerGroup className="mr-1.5" />}
                {category}
                <span
                  className={`ml-1.5 rounded-full px-2 py-0.5 text-xs ${
                    isActive
                      ? "bg-primary-content text-primary font-bold"
                      : "bg-base-300 text-base-content/80"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Categorized Skills Subsections */}
        <div className="space-y-14">
          {filteredCategories.map((cat) => {
            const categorySkills = typedSkills.filter(
              (skill) => skill.category === cat.name
            );
            const Icon = cat.icon;

            return (
              <div
                key={cat.name}
                className="rounded-3xl border border-base-300/70 bg-base-200/30 p-6 sm:p-8 lg:p-10 shadow-sm"
              >
                {/* Category Header */}
                <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-base-300/60 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-sm">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold sm:text-2xl text-base-content">
                        {cat.name}
                      </h3>
                      <p className="text-xs text-base-content/60 sm:text-sm">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex w-fit items-center rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
                    {categorySkills.length} {categorySkills.length === 1 ? "Skill" : "Skills"}
                  </span>
                </div>

                {/* Grid of Skill Cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {categorySkills.map((skill: Skill) => (
                    <SkillCard
                      key={skill.id}
                      title={skill.title}
                      level={skill.lvl}
                      icon={skill.icon}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
