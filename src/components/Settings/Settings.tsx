import useLang from "../../store/useLang";
import LangChanger from "../LangChanger/LangChanger";
import styles from "./Settings.module.css";

const Settings = ({
  setShowSettings,
}: {
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const langFile = useLang((state) => state.langFile);
  return (
    <div className={styles.settingsWrapper}>
      <div className={styles.settings}>
        <h1>{langFile.languangeSettings}</h1>
        <div>
          <LangChanger Langs={["eng", "ru"]} />
        </div>
        <button
          className={"btn " + styles.exitBtn}
          onClick={() => setShowSettings((prev) => !prev)}
        >
          {langFile.exit}
        </button>
      </div>
    </div>
  );
};

export default Settings;
