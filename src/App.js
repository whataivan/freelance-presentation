import { About } from './components/About/About';
import './App.css';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Header } from 'components/Header/Header';
import { Socials } from 'components/Socials/Socials';
import { Hero } from 'components/Hero/Hero';
import {Сapabilities} from './components/Сapabilities/Сapabilities'
// import { Par } from 'components/Par/Par';

import { useEffect, useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Portfolio } from 'components/Portfolio/Portfolio';
import { UpBtn } from 'components/UpBtn/UpBtn';
import mys

//-----------------------------------------------------------------------------------
export function App() {
  const [yOffset, SetYOffset] = useState(0)
  const [reviews, SetReviews] = useState(0)
  const onScroll = (e) => {
    SetYOffset(e.currentTarget.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    dbChange(false)
    return () => (window.removeEventListener('scroll', onScroll))
  }, [yOffset]);

  const sql = require('mysql')

  const connection = sql.createConnection({
      host: "ga477435.mysql.tools",
      user: "ga477435_46",
      database: "ga477435_46",
      password: "a*85F)iuU7"
  
  })
  async function dbChange(set=false, keys, values,  ) {
     
      const query = set?(`INSERT INTO revs (${keys.join(',')}) VALUES (${values.map(el=>"'"+el+"'").join(',')});`):('SELECT * FROM revs')
     
      connection.query(query, (err, res, fields)=>{
          if (err) {
              console.log(err);
          }else{
              console.log(res);
              SetReviews(res)
          }
      })
  }

  return (
    <ParallaxProvider>
    <div className='container'>
      <Socials yOffset={yOffset}  />
      <Header yOffset={yOffset} />
      <Hero yOffset={yOffset} />
      <About yOffset={yOffset} />
      <Portfolio/>
      <Сapabilities/>
      {/* <About yOffset={yOffset}  /> */}

      {/* <Video/> */}
      <UpBtn yOffset={yOffset}/>

    </div>
    </ParallaxProvider>
  );
}

export default App;
