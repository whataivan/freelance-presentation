import { useEffect, useState } from "react";
import css from "./About.module.css";

export const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [imageClass, setImageClass] = useState(0);
  useEffect(() => {
    switchClassName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);
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
        resultClass =  css.leftSideFirst;
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
    return resultClass
  };
  const textArr = [
    "Bystro sdalayu eptaaaaaaaaaaaaa",
    "Kachestvenno sdalayu eptaaaaaaaaaaaaa",
    "Deshevo sdalayu eptaaaaaaaaaaaaa",
    "Krasyvo sdalayu eptaaaaaaaaaaaaa",
  ];
  const content = [
    { title: "Быстро", id: 1 },
    { title: "Качественно", id: 2 },
    { title: "Дешево", id: 3 },
    { title: "Красиво", id: 4 },
  ];

  return (
    <div className={switchClassName()}>
      <div className={switchImageClass()}>
        {content.map(({ title, id }) => {
          return (
            <p
              onMouseLeave={() => {
                setCurrentIndex(0);
                setCurrentText("");
                setImageClass(0)
              }}
              key={id}
              onMouseMove={() => {
                setImageClass(id)
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
