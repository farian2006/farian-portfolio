"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCheck, FaEye, FaTimes } from "react-icons/fa";
import certificates from "@/data/certificates.json";
import type { Certificate } from "@/types/certificateType";

const typedCertificates: Certificate[] = certificates;

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

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
            <span>Certifications</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-base-content/70 sm:text-base">
            My certifications, technical training, and achievements from my
            learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {typedCertificates.map((cert) => (
            <div key={cert.id} className="group h-full">
              <div className="card h-full overflow-hidden rounded-2xl border border-base-300 bg-base-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/60 hover:shadow-xl">
                <figure className="relative h-52 overflow-hidden bg-base-300 sm:h-56">
                  <Image
                    src={cert.image}
                    alt={`${cert.title} Certificate`}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </figure>

                <div className="card-body gap-3 p-5 sm:p-6">
                  <div className="flex items-start gap-2 text-sm font-semibold leading-5 text-primary">
                    <FaCheck className="mt-1 shrink-0" />
                    <span>{cert.issuer}</span>
                  </div>

                  <h3 className="card-title text-lg leading-snug sm:text-xl">
                    {cert.title}
                  </h3>

                  <p className="text-sm leading-6 text-base-content/70">
                    Issued: {cert.issueDate}
                    {cert.expiryDate && (
                      <>
                        <br />
                        Expires: {cert.expiryDate}
                      </>
                    )}
                  </p>

                  <button
                    type="button"
                    onClick={() => setSelectedImage(cert.image)}
                    className="btn btn-primary btn-sm mt-auto w-full gap-2 sm:btn-md"
                  >
                    <FaEye />
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Certificate Image Preview"
          className="modal modal-open z-50 bg-black/80 p-3 backdrop-blur-sm sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-5xl flex-col rounded-2xl bg-base-100 p-3 shadow-2xl sm:p-5"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="btn btn-circle btn-ghost btn-sm absolute right-3 top-3 z-10 bg-base-100/90"
              aria-label="Close certificate preview"
            >
              <FaTimes />
            </button>

            <div className="relative min-h-0 flex-1 overflow-auto pt-10">
              <Image
                src={selectedImage}
                alt="Full certificate preview"
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
