import skills from "@/data/skills.json";
import SkillCard from "./SkillCard";
import { Skill } from "@/types/skillType";

const typedSkills: Skill[] = skills;

const Skills = () => {
  return (
    <section id="skills" className="px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            My Expertise
          </p>

          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {typedSkills.map((skill: Skill) => (
            <SkillCard key={skill.id} title={skill.title} level={skill.lvl} icon={skill.icon}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
