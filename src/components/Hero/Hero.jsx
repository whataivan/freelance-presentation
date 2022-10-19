import css from './Hero.module.css';

export const Hero = ({yOffset}) => {
  return (
    <div style={{ backgroundColor: '#000' }} className={css.hero}>
      <div className={css.topSide}>
        <h1
          data-aos="fade-top"
        //   data-aos-delay={500}
          data-aos-duration="2000"
          className={css.title}
        >
          Ivan Pikun
        </h1>
        <h2
          data-aos="fade-top"
        //   data-aos-delay={500}
          data-aos-duration="2000"
          className={css.subTitle}
        >
          Web-developer
        </h2>
      </div>
    </div>
  );
};
