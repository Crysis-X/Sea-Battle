import Config from "../../config/SWConfig";
import useSettings from "../../store/useSettings";
import oneSrc from "../../assets/images/one.png";
import twoSrc from "../../assets/images/two.png";
import threeSrc from "../../assets/images/three.png";
import fourSrc from "../../assets/images/four.png";
import { useEffect, useRef } from "react";
import BorderCleaner from "../../utils/borderCleaner";
import styles from "./ShipMenu.module.css";

const ShipMenu = () => {
  const [remainders, setBuffer] = useSettings((state) => [
    state.remainders,
    state.setBuffer,
  ]);
  const oneDiv = useRef<HTMLDivElement>(null);
  const twoDiv = useRef<HTMLDivElement>(null);
  const threeDiv = useRef<HTMLDivElement>(null);
  const fourDiv = useRef<HTMLDivElement>(null);

  const one = new Image();
  const two = new Image();
  const three = new Image();
  const four = new Image();

  const clearBorder = () => BorderCleaner([one, two, three, four]);

  one.onclick = (e) => {
    if (remainders.one == 0) {
      e.preventDefault();
      return;
    }
    clearBorder();
    one.style.border = "2px solid #000";
    setBuffer(1);
  };
  two.onclick = (e) => {
    if (remainders.two == 0) {
      e.preventDefault();
      return;
    }
    clearBorder();
    two.style.border = "2px solid #000";
    setBuffer(2);
  };
  three.onclick = (e) => {
    if (remainders.three == 0) {
      e.preventDefault();
      return;
    }
    clearBorder();
    three.style.border = "2px solid #000";
    setBuffer(3);
  };
  four.onclick = (e) => {
    if (remainders.four == 0) {
      e.preventDefault();
      return;
    }
    clearBorder();
    four.style.border = "2px solid #000";
    setBuffer(4);
  };

  useEffect(() => {
    one.src = oneSrc;
    one.style.width = Config.ui.style.cellWidth.join("");
    one.style.height = Config.ui.style.cellHeight.join("");
    if (oneDiv.current) oneDiv.current.append(one);

    two.src = twoSrc;
    two.style.width = Config.ui.style.cellWidth.join("");
    two.style.height =
      Config.ui.style.cellHeight[0] * 2 + Config.ui.style.cellHeight[1];
    if (twoDiv.current) twoDiv.current.append(two);

    three.src = threeSrc;
    three.style.width = Config.ui.style.cellWidth.join("");
    three.style.height =
      Config.ui.style.cellHeight[0] * 3 + Config.ui.style.cellHeight[1];
    if (threeDiv.current) threeDiv.current.append(three);

    four.src = fourSrc;
    four.style.width = Config.ui.style.cellWidth.join("");
    four.style.height =
      Config.ui.style.cellHeight[0] * 4 + Config.ui.style.cellHeight[1];
    if (fourDiv.current) fourDiv.current.append(four);
  }, []);
  return (
    <>
      <div className={styles.shipMenu}>
        <div ref={oneDiv} className={styles.shipMenuItem}>
          <span>{remainders.one}</span>
        </div>
        <div ref={twoDiv} className={styles.shipMenuItem}>
          <span>{remainders.two}</span>
        </div>
        <div ref={threeDiv} className={styles.shipMenuItem}>
          <span>{remainders.three}</span>
        </div>
        <div ref={fourDiv} className={styles.shipMenuItem}>
          <span>{remainders.four}</span>
        </div>
      </div>
    </>
  );
};

export default ShipMenu;
