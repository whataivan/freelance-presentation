import css from './Portfolio.module.css';
import kapusta from '../../images/portfolio/kapusta.jpg';
import filmoteka from '../../images/portfolio/filmoteka.jpg';
import resume from '../../images/portfolio/resume.JPG';
import helleng from '../../images/portfolio/helleng.jpg';
import target from '../../images/portfolio/target.JPG';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
export const Portfolio = () => {
  const [currentImage, setCurrentImage] = useState(target);
  const [currentSlideName, setCurrentSlideName] = useState(
    'Presentation for advertising'
  );
  const portfolioList = [
    { id: 1, name: 'Presentation for advertising', img: target },
    { id: 2, name: 'Filmoteka', img: filmoteka },
    { id: 3, name: 'Kapu$ta', img: kapusta },
    { id: 4, name: 'HellEnglish', img: helleng },
    { id: 5, name: 'My resume', img: resume },
  ];
  return (
    <div className={css.portfolio}>
      <h3 className={css.title}>Мои работы</h3>
      <AnimatePresence>
      <motion.div className={css.headImgWrap}  >
        <h4 className={css.currentTitle}>{currentSlideName}</h4>
        <motion.img transition={{duration:0.9}} initial={{y:500, opacity:0}} animate={{y:0, opacity:1}} exit={{x:500, opacity:0.3}} key={currentImage} className={css.headImg} src={currentImage} alt="site" />
        <a className={css.primaryLink} href="фівфів">Посетить</a>
        <a className={css.secondaryLink} href="фівфів">Смотреть код</a>
      </motion.div>
      </AnimatePresence>
      <ul className={css.list}>
        {portfolioList.map(({ id, name, img }) => {
          return (
            <li
              onClick={() => {
                setCurrentImage(img);
                setCurrentSlideName(name);
              }}
              className={currentImage === img ? css.itemActive : css.item}
            >
              <img className={css.img} src={img} alt="expample" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
