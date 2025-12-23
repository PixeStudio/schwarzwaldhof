import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="left-side">
                    <div className="logo">Schwarzwaldhof</div>
                </div>
                <div className="center">
                    <nav className="nav">
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#rooms">Rooms</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#contact">Contact</a></li>
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