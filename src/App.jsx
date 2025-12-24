import Header from './components/Header';
import "./components/Header.css";
import Hero from "./components/Hero";
import "./components/Hero.css";
import HeroSlider from "./components/HeroSlider";

function App() {
  return (
    <div>
      <Header />
      <main className='page'>
        <section id='about' className='section'>
          <HeroSlider />
        </section>
      
        <section id='rooms' className='section'>
          <HeroSlider />
        </section>

        <section id='gallery' className='section'>
          <HeroSlider />
        </section>

        <section id='contact' className='contact'>
          <div className="contact_inner">
            <HeroSlider />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
