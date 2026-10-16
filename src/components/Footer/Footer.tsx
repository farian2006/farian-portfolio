import {
  FaRegCopyright,
  FaTools,
  FaGraduationCap,
  FaFolderOpen,
  FaHandsHelping,
  FaUserCircle,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { GrCertificate } from "react-icons/gr";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-base-300 bg-base-200 text-base-content">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link
              href="#home"
              className="inline-block text-2xl font-bold tracking-tight transition-colors hover:text-primary"
            >
              Farian Tazwar<span className="text-primary"></span>
            </Link>

            <p className="max-w-xs text-sm leading-7 opacity-70">
              CSE student at BRAC University, learning full-stack web
              development and building projects to turn ideas into reality.
            </p>

            <Link
              href="#getintouch"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-content transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <FaEnvelope size={14} />
              Get In Touch
            </Link>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-3">
              <Link href="#home" className="footer-link">
                <IoHomeSharp size={16} />
                Home
              </Link>
              <Link href="#aboutMe" className="footer-link">
                <FaUserCircle size={16} />
                About Me
              </Link>
              <Link href="#skills" className="footer-link">
                <FaTools size={16} />
                Skills
              </Link>
              <Link href="#getintouch" className="footer-link">
                <FaEnvelope size={16} />
                Get In Touch
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest">
              Explore
            </h3>
            <nav className="flex flex-col gap-3">
              <Link href="#projects" className="footer-link">
                <FaFolderOpen size={16} />
                Projects
              </Link>
              <Link href="#certificates" className="footer-link">
                <GrCertificate size={16} />
                Certificates
              </Link>
              <Link href="#education" className="footer-link">
                <FaGraduationCap size={16} />
                Education
              </Link>
              <Link href="#voluenteer" className="footer-link">
                <FaHandsHelping size={16} />
                Volunteer Experience
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest">
              Let's Connect
            </h3>
            <p className="mb-4 text-sm leading-7 opacity-70">
              Interested in collaborating or discussing a project? Feel free to
              reach out.
            </p>
            <a
              href="mailto:fariantazwar@gmail.com"
              className="break-all text-sm font-medium text-primary transition-colors hover:underline"
            >
              fariantazwar@gmail.com
            </a>
            <div className="mt-5">
              <Link
                href="#home"
                className="inline-flex items-center gap-2 text-sm font-medium opacity-70 transition-all hover:text-primary hover:opacity-100"
              >
                Back to top
                <FaArrowUp size={13} />
              </Link>
            </div>
          </div>
        </div>

        <div className="my-8 border-t border-base-300" />

        <div className="flex flex-col items-center justify-between gap-3 text-center text-sm opacity-70 sm:flex-row sm:text-left">
          <p className="flex flex-wrap items-center justify-center gap-1.5 sm:justify-start">
            <FaRegCopyright size={13} />
            2026 Farian Tazwar. All rights reserved.
          </p>

          <p>
            Designed & built with{" "}
            <span className="font-semibold text-primary">passion</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
