import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { IoHomeSharp } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { FaFolderOpen } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const NavLinks = () => {
  return (
    <div className="mt-4 ml-4">
      <div className="drawer">
        <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer-1" className="btn drawer-button">
            <GiHamburgerMenu />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-1"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <Link href="#home">
                {" "}
                <IoHomeSharp />
                Home
              </Link>
            </li>
            <li>
              <Link href="#aboutMe">
                {" "}
                <FaUserCircle />
                About Me
              </Link>
            </li>
            <li>
              <Link href="#skills">
                {" "}
                <FaTools />
                Skills
              </Link>
            </li>
            <li>
              <Link href="#education">
                {" "}
                <FaGraduationCap />
                Education
              </Link>
            </li>
            <li>
              <Link href="#certificates">
                {" "}
                <GrCertificate />
                Certificates
              </Link>
            </li>
            <li>
              <Link href="#projects">
                {" "}
                <FaFolderOpen />
                Projects
              </Link>
            </li>
            <li>
              <Link href="">
                {" "}
                <FaHandsHelping />
                Volunteery Experience
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavLinks;
