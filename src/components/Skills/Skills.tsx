import skills from "@/data/skills.json";
import SkillCard from "./SkillCard";
import type { Skill } from "@/types/skillType";

const typedSkills: Skill[] = skills;

const Skills = () => {
  return (
    <section id="skills" className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            My Expertise
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Skills &amp; <span className="text-primary">Technologies</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {typedSkills.map((skill: Skill) => (
            <SkillCard
              key={skill.id}
              title={skill.title}
              level={skill.lvl}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
