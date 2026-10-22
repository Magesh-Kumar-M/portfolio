

import { useState } from "react";
import Button from "../ui/Button";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {

  const [ activeLink , setActiveLink] = useState('#home');


  return (
    <header className="navbar">
      <div className="logo">
        <a className="logo-head" href="#home">
            Magesh Kumar M
        </a>
        <div className="logo-sub-head">
          Full-Stack Developer
        </div>
      </div>

      <nav aria-label="Main navigation">
        {navLinks.map((link) => (
          <a className={activeLink === link.href ? `active-nav` : `inactive-nav`} key={link.href} href={link.href} onClick={()=>{setActiveLink(link.href)}}>
            {link.label}
          </a>
        ))}
      </nav>

        <div className="resume-button">

      <a  href="/resume.pdf" download>
        Resume
        <Image alt={`download`} src={`/download.svg`} width={17} height={17} />
       </a>
        </ div>
    </header>
    
  );

}