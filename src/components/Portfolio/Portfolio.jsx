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

      <motion.div className={css.headImgWrap}>
        <motion.h4
          className={css.currentTitle}
          key={currentSlideName}
          transition={{ duration: 1 }}
          initial={{ y: -200, opacity: 0, x: '-50%' }}
          animate={{ y: 0, opacity: 1, x: '-50%' }}
        >
          {currentSlideName}
        </motion.h4>
        <AnimatePresence>
          <motion.img
            transition={{ duration: 0.6 }}
            initial={{ y: 500, opacity: 0, scale: 0.3 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            key={currentSlideName}
            className={css.headImg}
            src={currentImage}
            alt="site"
          />
          <motion.div
          className={css.linkWrap }
            key={currentImage}
            transition={{ duration: 1 }}
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1}}
          >
            <a className={css.link} href="фівфів">
              Посетить
            </a>
            <a className={css.link} href="фівфів">
              Смотреть код
            </a>
          </motion.div>
        </AnimatePresence>
      </motion.div>

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
