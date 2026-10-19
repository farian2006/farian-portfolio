import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            My Academic Journey
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Education <span className="text-primary">& Qualifications</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <div className="group h-full sm:col-span-2 lg:col-span-1">
          <div className="group h-full">
            <div className="card h-full overflow-hidden border border-base-300 bg-base-200 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl">
              <figure className="relative h-52 overflow-hidden sm:h-56">
                <Image
                  src="/assets/education/bracu.jpg"
                  alt="BRAC University"
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </figure>

              <div className="card-body gap-3 p-5 sm:p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <FaGraduationCap size={18} />
                  <span>Undergraduate</span>
                </div>

                <h3 className="card-title text-xl leading-snug">
                  BRAC University
                </h3>

                <p className="text-sm leading-6 text-base-content/70">
                 BSc in Computer Science & Engineering
                </p>

                <div className="mt-auto border-t border-base-300 pt-4">
                  <p className="text-sm text-base-content/70">CGPA</p>
                  <p className="text-2xl font-bold text-primary">
                    3.50
                    <span className="text-sm font-medium text-base-content/60">
                      {" "}
                      / 4.00
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>

          <div className="group h-full">
            <div className="card h-full overflow-hidden border border-base-300 bg-base-200 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl">
              <figure className="relative h-52 overflow-hidden sm:h-56">
                <Image
                  src="/assets/education/pgc.jpg"
                  alt="Patuakhali Government College"
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </figure>

              <div className="card-body gap-3 p-5 sm:p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <FaGraduationCap size={18} />
                  <span>Higher Secondary</span>
                </div>

                <h3 className="card-title text-xl leading-snug">
                  Patuakhali Government College
                </h3>

                <p className="text-sm leading-6 text-base-content/70">
                  Higher Secondary Certificate (HSC)
                </p>

                <div className="mt-auto border-t border-base-300 pt-4">
                  <p className="text-sm text-base-content/70">GPA</p>
                  <p className="text-2xl font-bold text-primary">
                    5.00
                    <span className="text-sm font-medium text-base-content/60">
                      {" "}
                      / 5.00
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="group h-full sm:col-span-1 lg:col-span-1">
            <div className="card h-full overflow-hidden border border-base-300 bg-base-200 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl">
              <figure className="relative h-52 overflow-hidden sm:h-56">
                <Image
                  src="/assets/education/jubilee.jpg"
                  alt="Patuakhali Government Jubilee High School"
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </figure>

              <div className="card-body gap-3 p-5 sm:p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <FaGraduationCap size={18} />
                  <span>Secondary</span>
                </div>

                <h3 className="card-title text-xl leading-snug">
                  Patuakhali Government Jubilee High School
                </h3>

                <p className="text-sm leading-6 text-base-content/70">
                  Secondary School Certificate (SSC)
                </p>

                <div className="mt-auto border-t border-base-300 pt-4">
                  <p className="text-sm text-base-content/70">GPA</p>
                  <p className="text-2xl font-bold text-primary">
                    5.00
                    <span className="text-sm font-medium text-base-content/60">
                      {" "}
                      / 5.00
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
