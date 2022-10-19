import { useEffect, useState } from 'react';
import css from './About.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
// import { Parallax } from 'react-parallax'


export const About = ({yOffset}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [imageClass, setImageClass] = useState(0);
  
  
  
  useEffect(() => {
    switchClassName();
    
    
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, yOffset]);
 
  let delay = 0;
  console.log(delay);
  const switchClassName = () => {
    let resultClass;
    switch (currentIndex) {
      case 0:
        resultClass = css.container;
        break;
      case 1:
        resultClass = css.containerFirst;
        break;
      case 2:
        resultClass = css.containerTwo;
        break;
      case 3:
        resultClass = css.containerThree;
        break;
      case 4:
        resultClass = css.containerFour;
        break;
      default:
        break;
    }
    return resultClass;
  };
  const switchImageClass = () => {
    let resultClass;
    switch (imageClass) {
      case 0:
        resultClass = css.leftSide;
        break;
      case 1:
        resultClass = css.leftSideFirst;
        break;
      case 2:
        resultClass = css.leftSideTwo;
        break;
      case 3:
        resultClass = css.leftSideThree;
        break;
      case 4:
        resultClass = css.leftSideFour;
        break;
      default:
        break;
    }
    return resultClass;
  };
  const textArr = [
    'Быстро реализую вашу задумку, в отличии от крупных компаний, в моей работе отсутствуюет бюрократия, решение не проходит несколько этапов, чтобы попасть в точку назначения и быть реализованым. Нужно что-то поменять? Просто напишите мне и в скором времени будет готово.',
    'Все основные задачи, и так же мелочи будут реализованы в точном соответствии с вашим запросом. Опыт решения разнообразных задач  позволит мне решать ваши поставленные цели, в соответствии с актуальными трендами разработки. Проект пишется структурированно и семантично, это позволит в случае необходимости расширить функционал, ведь структура и код максимально понятны.',
    'Мне не приходится платить большому количеству разработчиков и другого персонала при разработке вашего продукта. Поэтому цена в несколько раз ниже рыночной. Напрмер, одностраничный сайт в любой веб студии будет стоить, самый минимум, от 300 usd, в моем случае это обойдется 100-150 usd, я уже не говорю про экономию на более крупных проектах.  ',
    'Сделаю "Вау" еффект, взаимодействие с сайтом, плавные переходы, анимации и оформление заставят вашего клиента остаться подольше и оставить заявку. Подберу картинки и декоративные элементы оформления под тематику вашего продукта. В конечном итоге ваш сайт будет выглядеть красиво и гармонично. ',
  ];
  const content = [
    { title: 'Быстро', id: 1 },
    { title: 'Качественно', id: 2 },
    { title: 'Дешево', id: 3 },
    { title: 'Красиво', id: 4 },
  ];
  AOS.init();
  
  return (
    // <Parallax></Parallax>
    <div style={{ transform:`translateY(-${yOffset/50}vh)`,overflow:'hidden' }}  className={switchClassName()}>
      <div className={switchImageClass()}> 
        {content.map(({ title, id }) => {
          return (
            <p data-aos="fade-right"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay={String(delay+=75)}
            data-aos-duration="700"
              
              // onMouseLeave={() => {
              //   setCurrentIndex(0);
              //   setCurrentText('');
              //   setImageClass(0);
              // }}
              key={id}
              onMouseMove={() => {
                setImageClass(id);
                setCurrentIndex(id);
                setCurrentText(textArr[id - 1]);
              }}
              className={css.title}
            >
              {/* <div className={css.timeline}></div> */}
              {title}
            </p>
          );
        })}
      </div>
      <div className={css.rightSide}>
        <p className={css.rightSideText}>{currentText}</p>
      </div>
    </div>
  );
};
