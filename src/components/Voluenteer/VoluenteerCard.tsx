import Image from "next/image";
import { FaCalendarAlt, FaUsers } from "react-icons/fa";

type Volunteer = {
  id: number;
  organization: string;
  position: string;
  startDate: string;
  endDate: string;
  image: string;
};

type VolueenterCardProps = {
  volunteer: Volunteer;
};

const VolueenterCard = ({ volunteer }: VolueenterCardProps) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-base-300/70 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl">
      <div className="flex h-44 items-center justify-center bg-base-200/60 p-6">
        <div className="relative h-44 w-full overflow-hidden bg-base-200/60">
          <Image
            src={volunteer.image}
            alt={`${volunteer.organization} logo`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-4 flex items-center gap-2 text-sm text-primary">
          <FaUsers size={14} />
          <span className="font-medium">Volunteer Experience</span>
        </div>

        <h3 className="text-lg font-bold leading-snug transition-colors group-hover:text-primary">
          {volunteer.organization}
        </h3>

        <p className="mt-2 text-sm font-medium text-base-content/70">
          {volunteer.position}
        </p>

        <div className="mt-auto pt-6">
          <div className="flex items-start gap-3 rounded-xl bg-base-200/60 p-3">
            <FaCalendarAlt className="mt-1 shrink-0 text-primary" size={15} />

            <div>
              <p className="text-xs font-medium text-base-content/50">
                Duration
              </p>

              <p className="mt-1 text-sm font-semibold">
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
