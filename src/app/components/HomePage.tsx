import Image from "next/image";
import { IoMdMail } from "react-icons/io";
import { MdDownload } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-8 px-5 py-12 sm:px-8 md:flex-row md:gap-10 lg:gap-16">
      <div className="w-full max-w-xs shrink-0 sm:max-w-sm md:w-1/2 md:max-w-md">
        <Image
          src="/assests/logo/personal.jpg"
          height={500}
          width={500}
          alt="Personal Image"
          className="h-auto w-full rounded-2xl border-2 object-cover"
          priority
        />
      </div>

      <div className="flex w-full max-w-xl flex-col text-center md:w-1/2 md:text-left">
        <h1 className="mb-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
          Hi I Am{" "}
          <span className="typing-name text-blue-500">FARIAN TAZWAR</span>
        </h1>
        <h1 className="mb-4 text-3xl font-bold sm:text-2xl lg:text-3xl">
         <span > Aspiring Developer </span>
        </h1>

        <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
          Learning Full-Stack Web Development | JavaScript Enthusiast
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
          <Link href="/getInTouch" className="btn btn-primary w-full gap-2">
            <IoMdMail size={20} />
            Get In Touch
          </Link>

          <a href="/cv.pdf" download className="btn w-full gap-2">
            <MdDownload size={20} />
            Download CV
          </a>

          <a
            href="https://github.com/farian2006"
            target="_blank"
            rel="noopener noreferrer"
            className="btn w-full gap-2"
          >
            <FaGithub size={20} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/farian-tazwar/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn w-full gap-2"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

// //  <p className="text-black">
//           I am currently pursuing a BSc in Computer Science and Engineering at
//           BRAC University, with a growing interest in Full-Stack Web
//           Development, JavaScript, and Web and App Development. As an aspiring
//           developer, I am continuously learning new technologies, exploring
//           modern web development tools, and working to strengthen my programming
//           and problem-solving skills. I enjoy learning by building projects and
//           look forward to turning my ideas into practical, user-friendly digital
//           solutions. Originally from Patuakhali, I have also been actively
//           involved in social and volunteer organizations throughout my academic
//           journey. During my SSC and HSC years, I served as Joint Secretary of
//           PGC Science Club and as a General Member of Patuakhali Youth Club, Red
//           Crescent Society, and National Children’s Task Force. Currently, I
//           serve as the General Secretary of Patuakhali Volunteers and as an
//           Events Member of the BRAC University Esports Club. These roles have
//           helped me develop leadership, teamwork, communication, and
//           organizational skills while allowing me to contribute to my community
//           and participate in meaningful initiatives. I believe in continuous
//           learning, collaboration, and personal growth. My goal is to strengthen
//           my technical expertise, gain practical experience in software
//           development, and grow into a skilled developer while continuing to
//           make a positive impact through social work and community involvement.
//         </p>
//         </div>
