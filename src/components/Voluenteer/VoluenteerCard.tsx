import Image from "next/image";
import { FaCalendarAlt, FaUsers } from "react-icons/fa";
import type { Volunteer } from "@/types/voluenteerType";

type VolueenterCardProps = {
  volunteer: Volunteer;
};

const VolueenterCard = ({ volunteer }: VolueenterCardProps) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-base-300 bg-base-200 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl">
      <div className="relative h-44 w-full overflow-hidden bg-base-300/40 p-4">
        <Image
          src={volunteer.image}
          alt={`${volunteer.organization} logo`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
          <FaUsers size={14} />
          <span>Volunteer Experience</span>
        </div>

        <h3 className="text-lg font-bold leading-snug transition-colors group-hover:text-primary">
          {volunteer.organization}
        </h3>

        <p className="mt-2 text-sm font-medium text-base-content/70">
          {volunteer.position}
        </p>

        <div className="mt-auto pt-5">
          <div className="flex items-center gap-3 rounded-xl bg-base-100 p-3 border border-base-300/60">
            <FaCalendarAlt className="shrink-0 text-primary" size={15} />

            <div>
              <p className="text-xs font-medium text-base-content/50">
                Duration
              </p>

              <p className="mt-0.5 text-sm font-semibold">
                {volunteer.startDate} – {volunteer.endDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default VolueenterCard;
