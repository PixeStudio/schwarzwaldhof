import { useState, useEffect } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";

import "./Header.css";

function Header({ activeSection }) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  };

  useEffect(() => {
    if(!isMenuOpen) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        toggleMenu();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    }
  }, [isMenuOpen])

  return (
    <header className="header">
      <div className="header-container">

        <button className="hamburger" onClick={toggleMenu} aria-label="Open menu"><HiOutlineMenu /></button>

        <div className="left-side">
          <div className="logo">Schwarzwaldhof</div>
        </div>

        <div className="center">
          <nav className="nav">
            <ul>
              <li>
                <a href="#about" className={activeSection === "about" ? "active" : ""}>
                  About
                </a>
              </li>
              <li>
                <a href="#rooms" className={activeSection === "rooms" ? "active" : ""}>
                  Rooms
                </a>
              </li>
              <li>
                <a href="#gallery" className={activeSection === "gallery" ? "active" : ""}>
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className={activeSection === "contact" ? "active" : ""}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="right-side">
          <button className="book-btn">Book Now</button>
        </div>
        <nav className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li><a href="#about" className={activeSection === "about" ? "active" : ""} onClick={toggleMenu}>About</a></li>
            <li><a href="#rooms" className={activeSection === "rooms" ? "active" : ""} onClick={toggleMenu}>Rooms</a></li>
            <li><a href="#gallery" className={activeSection === "gallery" ? "active" : ""} onClick={toggleMenu}>Gallery</a></li>
            <li><a href="#contact" className={activeSection === "contact" ? "active" : ""} onClick={toggleMenu}>Contact</a></li>
          </ul>

          <div className="mobile-menu__socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" onClick={toggleMenu} aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" onClick={toggleMenu} aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="https://wa.me/XXXXXXXXX" target="_blank" rel="noopener noreferrer" onClick={toggleMenu} aria-label="WhatsApp">
              <FaWhatsapp />
            </a>

            <a href="#contact" onClick={toggleMenu} aria-label="Chat">
              <BsChatDots />
            </a>
          </div>
        </nav>
        <div className={`menu-overlay ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu} />
      </div>
    </header>
  );
}

export default Header;
