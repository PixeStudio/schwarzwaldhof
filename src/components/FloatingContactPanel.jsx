// FloatingContactPanel.jsx
import { IoChevronBack } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";

import "./FloatingContactPanel.css";

export default function FloatingContactPanel() {
  return (
    <div className="floating-contact">
      <div className="contact-toggle">
        <IoChevronBack />
      </div>

      <div className="contact-icons">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaWhatsapp /></a>
        <a href="#"><BsChatDots /></a>
      </div>
    </div>
  );
}
