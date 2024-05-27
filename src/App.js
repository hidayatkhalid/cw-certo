import './App.css';
import Features from './sections/Features';
import Feedback from './sections/Feedback';
import FindOut from './sections/FindOut';
import Help from './sections/Help';
import Hero from './sections/Hero';
import NavBar from './sections/NavBar';
import WeDo from './sections/WeDo';
import Insight from './sections/Insight';
import Footer from './sections/Footer';

function App() {
  return (
    <main className='relative'>
      <NavBar />
      <section className=''>
        <Hero />
      </section>
      <section className=''>
        <Feedback />
      </section>
      <section>
        <WeDo />
      </section>
      <section>
        <Features />
      </section>
      <section>
        <Help />
      </section>
      <section>
        <FindOut />
      </section>
      <section>
        <Insight />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}

export default App;
