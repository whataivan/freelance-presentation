import css from './Сapabilities.module.css';
import svg from '../../images/symbol-defs.svg';
import { useState } from 'react';
// import th from "../../images/light.png"
export const Сapabilities = () => {
//   const [leftActive, setLeftActive] = useState(false);
  const [rightActive, setRightActive] = useState(false);
  return (
    <div className={css.capabilities}>
      <div className={css.leftSide}>
        {/* <img src={th} alt="" /> */}
        <h3 onMouseEnter={()=>setRightActive(true)} onMouseLeave={()=>setRightActive(false)} className={css.title}>
          <svg className={css.icon}>
            <use href={`${svg}#icon-check`} />
          </svg>
          Что я могу
        </h3>
      </div>
      <div className={css.rightSide}>
        {rightActive ? (
          <p className={css.rightSideText}>wdqSDSdsfsdfszdfs sSSWFVD dfdddd </p>
        ) : (
          <h3 className={css.titleSecond}>
            <svg className={css.iconSecond}>
              <use href={`${svg}#icon-cross`}/>
            </svg>
            Чего я не могу
          </h3>
        )}
      </div>
    </div>
  );
};
