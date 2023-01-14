import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'
function Navbar() {
    const [navbar, setNavbar] = useState(false);
    
    const changeBackground = () => {
        window.scrollY >= 100 ? setNavbar(true) : setNavbar(false);
    }
    useEffect(() => {
      changeBackground();
      window.addEventListener("scroll", changeBackground);
    })

  return (
    <nav>
      <div className={navbar ? "wrapper bg-show":"wrapper bg-hide"}>
        <Link className="my-name"    activeClass="active" to="top"             spy={true} smooth={true}>Emil Bertholdsson</Link>
        <Link className="nav-button" activeClass="active" to="about-section"   spy={true} smooth={true}>About Me</Link>
        <Link className="nav-button" activeClass="active" to="exp-section"     spy={true} smooth={true}>Experience</Link>
        <Link className="nav-button" activeClass="active" to="project-section" spy={true} smooth={true}>Projects</Link>
        <Link className="nav-button" activeClass="active" to="footer"          spy={true} smooth={true}>Contact</Link>
      </div>
    </nav>
      
  );
}
export default Navbar;