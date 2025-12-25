import "./Header.css";

function Header({ activeSection }) {
  return (
    <header className="header">
      <div className="header-container">

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

      </div>
    </header>
  );
}

export default Header;
