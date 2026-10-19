"use client";

import { useRef } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoHomeSharp } from "react-icons/io5";
import { FaTools, FaGraduationCap, FaHandsHelping, FaUserCircle, FaEnvelope } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";

const NavLinks = () => {
  const drawerCheckboxRef = useRef<HTMLInputElement>(null);

  const closeDrawer = () => {
    if (drawerCheckboxRef.current) {
      drawerCheckboxRef.current.checked = false;
    }
  };

  const navItems = [
    { href: "#home", label: "Home", icon: IoHomeSharp },
    { href: "#aboutMe", label: "About Me", icon: FaUserCircle },
    { href: "#skills", label: "Skills", icon: FaTools },
    { href: "#education", label: "Education", icon: FaGraduationCap },
    { href: "#certificates", label: "Certificates", icon: GrCertificate },
    { href: "#projects", label: "Projects", icon: FaFolderOpen },
    { href: "#volunteer", label: "Voluntary Experience", icon: FaHandsHelping },
    { href: "#getintouch", label: "Get In Touch", icon: FaEnvelope },
  ];

  return (
    <div className="fixed left-4 top-4 z-[9999]">
      <div className="drawer z-[9999]">
        <input
          id="my-drawer-1"
          ref={drawerCheckboxRef}
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer-1"
            aria-label="Open navigation menu"
            className="btn btn-circle btn-primary shadow-lg transition-transform hover:scale-105 drawer-button"
          >
            <GiHamburgerMenu size={18} />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-1"
            aria-label="Close navigation menu"
            className="drawer-overlay"
          />
          <ul className="menu bg-base-200/95 backdrop-blur-md min-h-full w-80 p-5 text-base shadow-2xl gap-1">
            <li className="menu-title px-4 py-2 font-bold text-base text-primary">
              Navigation
            </li>
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeDrawer}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-primary/10 hover:text-primary font-medium"
                  >
                    <Icon size={18} />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavLinks;
