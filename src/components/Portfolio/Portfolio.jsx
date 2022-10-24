import css from './Portfolio.module.css';
import kapusta from '../../images/portfolio/kapusta.jpg';
import filmoteka from '../../images/portfolio/filmoteka.jpg';
// import finder from '../../images/portfolio/finder.jpg';
import helleng from '../../images/portfolio/helleng.jpg';
import target from '../../images/portfolio/target.JPG';
import { useState } from 'react';
export const Portfolio = () => {
    const [currentImage, setCurrentImage]=useState(target)
  const portfolioList = [
    { id: 1, name: 'Presentation for targeted advertising', img: target },
    { id: 2, name: 'Filmoteka', img: filmoteka },
    { id: 3, name: 'Kapu$ta', img: kapusta },
    { id: 4, name: 'HellEnglish', img: helleng },
    { id: 5, name: 'Presentation for targeted advertising', img: target },
  ];
  return (
    <div className={css.portfolio}>
      <h3 className={css.title}>Мои работы</h3>
      <img className={css.headImg} src={currentImage} alt="site" />
      <ul className={css.list}>
        {portfolioList.map(({ id, name, img }) => {
          return (
            <li onClick={()=>setCurrentImage(img)} className={css.item}>
              <img className={css.img} src={img} alt="expample" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
