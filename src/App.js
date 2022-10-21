import { About } from './components/About/About';
import './App.css';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Header } from 'components/Header/Header';
import { Socials } from 'components/Socials/Socials';
import { Hero } from 'components/Hero/Hero';
import {Сapabilities} from './components/Сapabilities/Сapabilities'

import { useEffect, useState } from 'react';


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
      <Socials yOffset={yOffset}  />
      <Header yOffset={yOffset} />
      <Hero yOffset={yOffset} />
      <About yOffset={yOffset} />
      <Сapabilities/>
      {/* <About yOffset={yOffset}  /> */}

      {/* <Video/> */}
      

    </div>
  );
}

export default App;
