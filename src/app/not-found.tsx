"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  const router = useRouter();

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <section
      id="notfound"
      className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center px-5 py-12 sm:px-8 md:py-24 lg:px-10"
    >
      <div className="absolute inset-0 -z-10 bg-[url('data:image/svg+xml,%3Csvg width=\24\ height=\24\ viewBox=\0 0 24 24\ xmlns=\http://www.w3.org/2000/svg\%3E%3Ccircle cx=\12\ cy=\12\ r=\1\ fill=\%236b7280\ fill-opacity=\0.10\ /%3E%3C/svg%3E')] opacity-60" />
      <div className="absolute top-[-12%] left-[-12%] w-[560px] h-[560px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/15 rounded-full blur-[100px] -z-10" />
      <div className="relative z-10 mx-auto max-w-sm text-center">
        <h2 className="mb-2 text-9xl font-extrabold tracking-tight sm:text-9xl">
          404
        </h2>
        <h3 className="flex justify-center gap-2 mb-6 text-xl font-bold text-base-content text-red-600 sm:text-2xl">
          Page Not Found
          <span>😕</span>
        </h3>
        <p className="mb-8 max-w-xs mx-auto text-sm leading-relaxed text-base-content/70 sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:justify-center">
          <button
            onClick={handleBack}
            aria-label="Go back to the previous page"
            className="btn btn-primary w-full sm:w-auto rounded-xl shadow-md hover:-translate-y-1 hover:shadow-lg"
          >
            <FaArrowLeft size={16} className="mr-2" />
            Back
          </button>
        </div>
      </div>
    </section>
  );
}
