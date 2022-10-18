import css from './Socials.module.css';
import svg from '../../images/symbol-defs.svg';
export const Socials = () => {
  return (
    <div className={css.socials}>
      
      <ul className={css.list}>
        <li className={css.item}>
          {' '}
          <a className={css.link} href="https://www.instagram.com/whataivan/">
            <svg className={css.icon}>
              <use href={`${svg}#icon-instagram`} />
            </svg>
          </a>
        </li>
        <li className={css.item}>
          {' '}
          <a className={css.link} href="https://www.instagram.com/whataivan/">
            <svg className={css.icon}>
              <use href={`${svg}#icon-telegram`} />
            </svg>
          </a>
        </li>
        <li className={css.item}>
          {' '}
          <a className={css.link} href="https://www.instagram.com/whataivan/">
            <svg className={css.icon}>
              <use href={`${svg}#icon-github`} />
            </svg>
          </a>
        </li>
      </ul>
      <a className={css.tel} href="+380937208010" type="tel">
        +380 93 720 80 10
      </a>
    </div>
  );
};
