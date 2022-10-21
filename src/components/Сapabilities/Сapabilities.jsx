import css from './Сapabilities.module.css';
import svg from '../../images/symbol-defs.svg';



export const Сapabilities = () => {
  return (
    <div className={css.capabilities}>
      <div className={css.leftSide}>
        <h3 className={css.title}>
        <svg  className={css.icon}>
              <use href={`${svg}#icon-check`} />
            </svg>
            Что я могу</h3>
      </div>
      <div className={css.rightSide}>
      <h3 className={css.titleSecond}>
      <svg  className={css.iconSecond}>
              <use href={`${svg}#icon-cross`} />
            </svg>Чего я не могу</h3>
      </div>
    </div>
  );
};
