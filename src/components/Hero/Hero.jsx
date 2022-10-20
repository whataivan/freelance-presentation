import css from './Hero.module.css';

export const Hero = ({yOffset}) => {
  return (
    <div style={{ opacity: 1000/yOffset}} className={css.hero}>
      <div className={css.topSide}>
        <h1
          data-aos="fade-top"
        //   data-aos-delay={500}
          data-aos-duration="1000"
          className={css.title}
          style={{ transform: yOffset>50?`translateX(-700px)`:`translateX(0)` }}
          // style={{ transform: `translateX(-${yOffset}px) `,  }}
        >
          Ivan Pikun
        </h1>
        <h2
        style={{ transform: yOffset>50?`translateX(700px)`:`translateX(0)` }} 
          data-aos="fade-right"
       
          data-aos-duration="1000"
          className={css.subTitle}
        >
          Web-developer
        </h2>
      </div>
    </div>
  );
};
