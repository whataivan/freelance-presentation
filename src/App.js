import { About } from './components/About/About';
import './App.css';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Header } from 'components/Header/Header';
import { Socials } from 'components/Socials/Socials';
import { Hero } from 'components/Hero/Hero';
import { useSpring, animated } from 'react-spring'
// import { Parallax } from 'react-parallax'
// import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
// import lol from './images/bas2.JPG'
export function App() {
  return (
    <div className='container'>
      <Header />
      <Hero/>
      {/* <ParallaxProvider> */}


      {/* <Parallax  style={{height: "100vh", background: '#000'}}  >

        wargsdgsgawsgS
      </Parallax > */}

      {/* <Parallax translateY={[-20, 20]}>
    <div className="my-thing" >wedfasdssssssssssssssssssssssssssssssssssssssssssssss</div>
  </Parallax> */}
      {/* <Parallax translateY={[-20, 20]}> */}
      <About />

      {/* </ParallaxProvider> */}



      <About />




      <Socials />

    </div>
  );
}

export default App;
