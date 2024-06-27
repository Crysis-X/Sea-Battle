import Cell from "../CellsCreater/Cell";
import styles from "./Field.module.css";

const NumbersCreater = ({ length }: { length: number }) => {
  const numbers: JSX.Element[] = [];
  for (let i = 0; i < length; i++) {
    numbers.push(
      <Cell key={i + 1} className={styles.helperCell}>
        {i + 1}
      </Cell>
    );
  }
  return <>{numbers}</>;
};

export default NumbersCreater;
