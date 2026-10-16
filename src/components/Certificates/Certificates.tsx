"use client";

import Image from "next/image";
import { useState } from "react";
import { FaCheck, FaEye, FaTimes } from "react-icons/fa";

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="certificates"
      className="px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary sm:text-sm">
            CREDENTIALS
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            <span className="text">Certifications</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-base-content/70 sm:text-base">
            My certifications, technical training, and achievements from my
            learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <div className="group h-full">
            <div className="card h-full overflow-hidden rounded-2xl border border-base-300 bg-base-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/60 hover:shadow-xl">
              <figure className="relative h-52 overflow-hidden bg-base-300 sm:h-56">
                <Image
                  src="/assests/certificates/ai.jpg"
                  alt="AI Webinar Certificate"
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </figure>

              <div className="card-body gap-3 p-5 sm:p-6">
                <div className="flex items-start gap-2 text-sm font-semibold leading-5 text-primary">
                  <FaCheck className="mt-1 shrink-0" />
                  <span>BFEW Technical Training Center & Aptech</span>
                </div>

                <h3 className="card-title text-lg leading-snug sm:text-xl">
                  Webinar on AI & Machine Learning
                </h3>

                <p className="text-sm leading-6 text-base-content/70">
                  Issued: August 24, 2025
                </p>

                <button
                  onClick={() =>
                    setSelectedImage("/assests/certificates/ai.jpg")
                  }
                  className="btn btn-primary btn-sm mt-auto w-full gap-2 sm:btn-md"
                >
                  <FaEye />
                  View Certificate
                </button>
              </div>
            </div>
          </div>

          <div className="group h-full">
            <div className="card h-full overflow-hidden rounded-2xl border border-base-300 bg-base-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/60 hover:shadow-xl">
              <figure className="relative h-52 overflow-hidden bg-base-300 sm:h-56">
                <Image
                  src="/assests/certificates/mern.jpg"
                  alt="MERN Webinar Certificate"
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </figure>

              <div className="card-body gap-3 p-5 sm:p-6">
                <div className="flex items-start gap-2 text-sm font-semibold leading-5 text-primary">
                  <FaCheck className="mt-1 shrink-0" />
                  <span>BFEW Technical Training Center & Aptech</span>
                </div>

                <h3 className="card-title text-lg leading-snug sm:text-xl">
                  Webinar on Full Stack MERN Web Development
                </h3>

                <p className="text-sm leading-6 text-base-content/70">
                  Issued: August 24, 2025
                </p>

                <button
                  onClick={() =>
                    setSelectedImage("/assests/certificates/mern.jpg")
                  }
                  className="btn btn-primary btn-sm mt-auto w-full gap-2 sm:btn-md"
                >
                  <FaEye />
                  View Certificate
                </button>
              </div>
            </div>
          </div>

          <div className="group h-full">
            <div className="card h-full overflow-hidden rounded-2xl border border-base-300 bg-base-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/60 hover:shadow-xl">
              <figure className="relative h-52 overflow-hidden bg-base-300 sm:h-56">
                <Image
                  src="/assests/certificates/graphics.jpg"
                  alt="Graphics Design Certificate"
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </figure>

              <div className="card-body gap-3 p-5 sm:p-6">
                <div className="flex items-start gap-2 text-sm font-semibold leading-5 text-primary">
                  <FaCheck className="mt-1 shrink-0" />
                  <span>BRAC University</span>
                </div>

                <h3 className="card-title text-lg leading-snug sm:text-xl">
                  Graphics Design — Beginner Level (Extra Curricular Activity)
                </h3>

                <p className="text-sm leading-6 text-base-content/70">
                  Issued: May 10, 2026
                </p>

                <button
                  onClick={() =>
                    setSelectedImage("/assests/certificates/graphics.jpg")
                  }
                  className="btn btn-primary btn-sm mt-auto w-full gap-2 sm:btn-md"
                >
                  <FaEye />
                  View Certificate
                </button>
              </div>
            </div>
          </div>

          <div className="group h-full">
            <div className="card h-full overflow-hidden rounded-2xl border border-base-300 bg-base-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/60 hover:shadow-xl">
              <figure className="relative h-52 overflow-hidden bg-base-300 sm:h-56">
                <Image
                  src="/assests/certificates/google.png"
                  alt="Google Analytics Certificate"
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </figure>

              <div className="card-body gap-3 p-5 sm:p-6">
                <div className="flex items-start gap-2 text-sm font-semibold leading-5 text-primary">
                  <FaCheck className="mt-1 shrink-0" />
                  <span>Google</span>
                </div>

                <h3 className="card-title text-lg leading-snug sm:text-xl">
                  Google Analytics Certification
                </h3>

                <p className="text-sm leading-6 text-base-content/70">
                  Issued: March 5, 2026
                  <br />
                  Expires: March 5, 2027
                </p>

                <button
                  onClick={() =>
                    setSelectedImage("/assests/certificates/google.png")
                  }
                  className="btn btn-primary btn-sm mt-auto w-full gap-2 sm:btn-md"
                >
                  <FaEye />
                  View Certificate
                </button>
              </div>
            </div>
          </div>

          <div className="group h-full">
            <div className="card h-full overflow-hidden rounded-2xl border border-base-300 bg-base-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/60 hover:shadow-xl">
              <figure className="relative h-52 overflow-hidden bg-base-300 sm:h-56">
                <Image
                  src="/assests/certificates/gp.png"
                  alt="Grameenphone Academy Certificate"
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </figure>

              <div className="card-body gap-3 p-5 sm:p-6">
                <div className="flex items-start gap-2 text-sm font-semibold leading-5 text-primary">
                  <FaCheck className="mt-1 shrink-0" />
                  <span>Grameenphone Academy</span>
                </div>

                <h3 className="card-title text-lg leading-snug sm:text-xl">
                  AI Workflow & Agents
                </h3>

                <p className="text-sm leading-6 text-base-content/70">
                  Issued: October 15, 2026
                </p>

                <button
                  onClick={() =>
                    setSelectedImage("/assests/certificates/gp.png")
                  }
                  className="btn btn-primary btn-sm mt-auto w-full gap-2 sm:btn-md"
                >
                  <FaEye />
                  View Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="modal modal-open z-50 bg-black/80 p-3 backdrop-blur-sm sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-5xl flex-col rounded-2xl bg-base-100 p-3 shadow-2xl sm:p-5"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="btn btn-circle btn-ghost btn-sm absolute right-3 top-3 z-10 bg-base-100/90"
              aria-label="Close certificate"
            >
              <FaTimes />
            </button>

            <div className="relative min-h-0 flex-1 overflow-auto pt-10">
              <Image
                src={selectedImage}
                alt="Full certificate"
                width={1600}
                height={1200}
                sizes="90vw"
                className="mx-auto h-auto max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
