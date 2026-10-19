import Image from "next/image";
import { IoMdMail } from "react-icons/io";
import { MdDownload } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const HomePage = () => {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-8 px-5 py-12 sm:px-8 md:flex-row md:gap-10 lg:gap-16"
    >
      <div className="w-full max-w-xs shrink-0 sm:max-w-sm md:w-1/2 md:max-w-md">
        <Image
          src="/assets/logo/personal.jpg"
          height={500}
          width={500}
          alt="Personal portrait of Farian Tazwar"
          className="h-auto w-full rounded-2xl border-2 border-base-300 object-cover shadow-xl"
          priority
        />
      </div>

      <div className="flex w-full max-w-xl flex-col text-center md:w-1/2 md:text-left">
        <h1 className="mb-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
          Hi, I Am{" "}
          <span className="typing-name text-primary">FARIAN TAZWAR</span>
        </h1>
        <p className="mb-4 text-2xl font-bold text-base-content/90 sm:text-2xl lg:text-3xl">
          Aspiring Full-Stack Developer
        </p>

        <p className="text-sm leading-relaxed text-base-content/70 sm:text-base">
          Learning Full-Stack Web Development | JavaScript &amp; Next.js Enthusiast
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
          <Link href="#getintouch" className="btn btn-primary w-full gap-2">
            <IoMdMail size={20} />
            Get In Touch
          </Link>

          <a
            href="/assets/cv/cv1.pdf"
            download="Farian-Tazwar-CV.pdf"
            aria-label="Download Farian Tazwar's CV"
            className="btn w-full gap-2 border-base-300"
          >
            <MdDownload size={20} />
            Download CV
          </a>

          <a
            href="https://github.com/farian2006"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Farian's GitHub Profile"
            className="btn w-full gap-2 border-base-300"
          >
            <FaGithub size={20} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/farian-tazwar/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Farian's LinkedIn Profile"
            className="btn w-full gap-2 border-base-300"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
