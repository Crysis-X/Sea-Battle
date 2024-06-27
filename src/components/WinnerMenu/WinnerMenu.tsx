import useLang from "../../store/useLang";
import useSeaBattle from "../../store/useSeaBattle";
import useSettings from "../../store/useSettings";
import styles from "./WinnerMenu.module.css";

const WinnerMenu = () => {
  const player = useSeaBattle((state) => state.winner);
  const name = useSettings((state) => (player ? state[player].name : null));
  const langFile = useLang((state) => state.langFile);
  return (
    <div className={styles.WinnerMenuWrapper}>
      <div className={styles.WinnerMenu}>
        <h1 className={styles.playerName}>
          {langFile.winner}: {name}
        </h1>
        <button className="btn" onClick={() => location.reload()}>
          {langFile.continue}
        </button>
      </div>
    </div>
  );
};

export default WinnerMenu;
