import { useState } from 'react';
import { useEffect } from 'react';
import Header from './components/Header';
import "./components/Header.css";
import Hero from "./components/Hero";
import "./components/Hero.css";
import HeroSlider from "./components/HeroSlider";

function App() {

  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll(".observe");
    const page = document.querySelector(".page");

    if (!page) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: page,
        threshold: 0.6,
      }
    );

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);


  return (
    <div>
      <Header activeSection={activeSection}/>
      <main className='page'>
        <section id='about' className='section observe'>
          <HeroSlider />
        </section>
      
        <section id='rooms' className='section observe'>
          <HeroSlider />
        </section>

        <section id='gallery' className='section observe'>
          <HeroSlider />
        </section>

        <section id='contact' className='contact observe'>
          <div className="contact_inner">
            <HeroSlider />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
