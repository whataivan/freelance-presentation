import css from './Header.module.css';

export const Header = ({yOffset}) => {
  return (
    <div style={ yOffset>800?{ backdropFilter: "blur(5px)"}:{background: '#3f3c3c'} } className={css.header}>
      <a href="./" className={css.logo}>
        Ivan Pikun
      </a>
      <ul style={{ color:yOffset<700? '#e3d324':'white' }} className={css.list}>
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
