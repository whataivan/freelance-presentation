import css from './Header.module.css';

export const Header = () => {
  return (
    <div className={css.header}>
      <a href="./" className={css.logo}>
        Ivan Pikun
      </a>
      <ul className={css.list}>
        <li className={css.item}>
          {' '}
          
          <a className={css.link} href="./">
            Главная
          </a>
          
        </li>
        <li className={css.item}>
          <a className={css.link} href="https://www.instagram.com/whataivan/">
            Портфолио
          </a>
        </li>
        <li className={css.item}>
          <a className={css.link} href="https://www.instagram.com/whataivan/">
          Контакты
          </a>
        </li>
      </ul>
    </div>
  );
};
