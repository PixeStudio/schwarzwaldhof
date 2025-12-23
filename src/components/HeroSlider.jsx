import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState, useEffect } from "react";
import "./HeroSlider.css";

// Import obrazów z assets
import hero1 from "../assets/hero/hero_1.jpg";
import hero2 from "../assets/hero/hero_2.jpg";
import hero3 from "../assets/hero/hero_3.jpg";
import hero4 from "../assets/hero/hero_4.jpeg";
import hero5 from "../assets/hero/hero_5.jpg";

// Lista slajdów
const slides = [
  {
    image: hero1,
    title: "Peaceful Retreat in the Forest",
    subtitle: "Experience the tranquility of nature at Schwarzwaldhof",
  },
  {
    image: hero2,
    title: "Modern Comfort Meets Tradition",
    subtitle: "Stylish rooms inspired by Black Forest heritage",
  },
  {
    image: hero3,
    title: "Unforgettable Culinary Moments",
    subtitle: "Local cuisine served with elegance and care",
  },
  {
    image: hero4,
    title: "Breathtaking Views",
    subtitle: "Wake up to a landscape that takes your breath away",
  },
  {
    image: hero5,
    title: "Wellness & Relaxation",
    subtitle: "Rejuvenate in our spa and sauna facilities",
  },
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
  const interval = setInterval(() => {
    if (isPaused) return;
    setIsFading(true);

    setTimeout(() => {
      setCurrent(prev => (prev + 1) % slides.length);
      setIsFading(false);
    }, 300);
  }, 3000);

  return () => clearInterval(interval);
}, [isPaused]);


  const { title, subtitle } = slides[current];

  return (
    <section className="hero-slider">
      <div
        className={`hero-slide ${isFading ? "fade" : ""}`}
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0)), url(${slides[current].image})`,
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        >

        <button 
          className="hero-arrow left" 
          aria-label="Previous slide"
          onClick={() => {
            setIsFading(true);
            setTimeout(() => {
              setCurrent(prev => (prev - 1 + slides.length) %slides.length);
              setIsFading(false);
            },300);
          }
        }
        ><FiChevronLeft /></button>

        <button 
          className="hero-arrow right" 
          aria-label="Next slide"
          onClick={() => {
            setIsFading(true);
            setTimeout(() => {
              setCurrent(prev => (prev + 1) %slides.length);
              setIsFading(false);
            },300);
          }
        }
        ><FiChevronRight /></button>

        <div className="hero-content">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => {
              if (index === current) return;
              setIsFading(true);
              setTimeout(() => {
                setCurrent(index);
                setIsFading(false);
              }, 300);
            }}
          />
        ))}
      </div>
    </section>
  );

}

export default HeroSlider;
