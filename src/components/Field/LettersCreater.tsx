import Cell from "../CellsCreater/Cell";
import styles from "./Field.module.css";

const LettersCreater = ({ letters }: { letters: string[] }) => {
  return (
    <div>
      {letters.map((letter) => (
        <Cell key={letter} className={styles.helperCell}>
          {letter}
        </Cell>
      ))}
    </div>
  );
};

export default LettersCreater;
