import css from './Socials.module.css';
import svg from '../../images/symbol-defs.svg';
export const Socials = ({yOffset}) => {
  return (
    <div
      className={css.socials}
      data-aos="fade-left"
      // data-aos-anchor-placement="bottom-bottom"
      data-aos-delay={500}
      data-aos-duration="1200"
    >
      <ul className={css.list}>
        <li className={css.item}>
          {' '}
          <a className={css.link} href="https://www.instagram.com/whataivan/">
            <svg style={{ fill:yOffset<615? '#e3d324':'white' }} className={css.icon}>
              <use href={`${svg}#icon-instagram`} />
            </svg>
          </a>
        </li>
        <li className={css.item}>
          {' '}
          <a className={css.link} href="https://www.instagram.com/whataivan/">
            <svg style={{ fill:yOffset<515? '#e3d324':'white' }} className={css.icon}>
              <use href={`${svg}#icon-telegram`} />
            </svg>
          </a>
        </li>
        <li className={css.item}>
          {' '}
          <a className={css.link} href="https://www.instagram.com/whataivan/">
            <svg style={{ fill:yOffset<415? '#e3d324':'white' }} className={css.icon}>
              <use href={`${svg}#icon-github`} />
            </svg>
          </a>
        </li>
      </ul>
      <a className={css.tel} href="tel:+380937208010" type="tel">
        +380 93 720 80 10
      </a>
    </div>
  );
};
