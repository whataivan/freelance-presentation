import { About } from './components/About/About';
import './App.css';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Header } from 'components/Header/Header';
import { Socials } from 'components/Socials/Socials';
import { Hero } from 'components/Hero/Hero';
import { useSpring, animated } from 'react-spring'
import { useEffect, useState } from 'react';
// import { Parallax } from 'react-parallax'
// import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
// import lol from './images/bas2.JPG'

//-----------------------------------------------------------------------------------
export function App() {
  const [yOffset, SetYOffset] = useState(0)

  const onScroll = (e) => {
    SetYOffset(e.currentTarget.pageYOffset)
  }
  
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => (window.removeEventListener('scroll', onScroll))
  }, [yOffset]);

  return (
    <div className='container'>
      <Header />
      <Hero />
      <About yOffset={yOffset} />

      <About />

      <Socials />

    </div>
  );
}

export default App;
