import Cell from "../CellsCreater/Cell";
import LettersCreater from "./LettersCreater";
import Config from "../../config/SWConfig";
import NumbersCreater from "./NumbersCreater";
import Name from "../Name/Name";
import styles from "./Field.module.css";
import useLang from "../../store/useLang";

const Field = (
  props: React.HTMLAttributes<HTMLDivElement> & { player?: "first" | "second" }
) => {
  const langFile = useLang((state) => state.langFile);
  const style: React.CSSProperties = {
    width: Config.ui.style.cellWidth[0] * 11 + Config.ui.style.cellWidth[1],
    height: Config.ui.style.cellHeight[0] * 11 + Config.ui.style.cellHeight[1],
  };
  return (
    <div className={styles.fieldWrapper}>
      {props.player && (
        <Name className={styles.playerName} player={props.player} />
      )}
      <div {...props} className={styles.field} style={style}>
        <div className={styles.top}>
          <Cell className={styles.helperCell} />
          <LettersCreater letters={langFile.letters} />
        </div>
        <div className={styles.bot}>
          <div className={styles.numbers}>
            <NumbersCreater length={10} />
          </div>
          <div className={styles.children}>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Field;
