import volunteers from "@/data/works.json";
import VolueenterCard from "./VoluenteerCard";
import type { Volunteer } from "@/types/voluenteerType";

const typedVolunteers: Volunteer[] = volunteers;

const Voluenteer = () => {
  return (
    <section id="volunteer" className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Giving Back
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Voluntary <span className="text-primary">Experience</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-base-content/70 sm:text-base">
            My journey of leadership, teamwork, and community service through
            volunteering with different organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {typedVolunteers.map((volunteer) => (
            <VolueenterCard key={volunteer.id} volunteer={volunteer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Voluenteer;
