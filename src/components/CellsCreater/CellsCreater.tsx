import Cell from "./Cell";
import styles from "./Cells.module.css";
import useLang from "../../store/useLang";

const CellsCreater = ({
  player,
  clickHandler,
}: {
  player: "first" | "second";
  clickHandler?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
}) => {
  const langFile = useLang((state) => state.langFile);
  const cells = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < langFile.letters.length; j++) {
      cells.push(
        <Cell
          className={[styles[player], player, "default"].join(" ")}
          id={langFile.letters[j] + (i + 1)}
          key={langFile.letters[j] + (i + 1) + player}
          onClick={clickHandler}
        ></Cell>
      );
    }
  }
  return cells;
};

export default CellsCreater;
