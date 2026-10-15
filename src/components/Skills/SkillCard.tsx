import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiCss } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { FaFileExcel } from "react-icons/fa6";

type SkillCardProps = {
  title: string;
  level: string;
  icon: string;
};

const icons: Record<string, React.ElementType> = {
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  react: SiReact,
  html: SiHtml5,
  css: SiCss,
  java: FaJava,
  python: SiPython,
  excel: FaFileExcel,
};

const SkillCard = ({ title, level, icon }: SkillCardProps) => {
  const Icon = icons[icon];
  return (
    <div className="group relative mx-auto w-full max-w-sm">
      <div className="card h-full border border-base-300 bg-base-200 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl">
        <div className="card-body items-center gap-4 p-5 sm:p-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-base-100 text shadow-sm transition-transform duration-300 group-hover:scale-110">
            {Icon && <Icon size={34} />}
          </div>

          <div className="text-center">
            <h2 className="card-title justify-center text-lg font-bold sm:text-xl">
              {title}
            </h2>

            <span className="mt-2 inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              {level}
            </span>
          </div>

          <div className="h-1 w-12 rounded-full bg-primary/40 transition-all duration-300 group-hover:w-20 group-hover:bg-primary" />
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
