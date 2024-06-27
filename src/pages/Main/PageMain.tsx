import useSettings from "../../store/useSettings";
import PageFirstPlayer from "../FirstPlayer/PageFirstPlayer";
import Settings from "../../components/Settings/Settings";
import { useState } from "react";
import styles from "./PageMain.module.css";
import useLang from "../../store/useLang";

const PageMain = () => {
  const setCurrentPage = useSettings((state) => state.setCurrentPage);
  const langFile = useLang((state) => state.langFile);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  function clickHandler() {
    setCurrentPage(<PageFirstPlayer />);
  }
  return (
    <div className={styles.main}>
      {showSettings && <Settings setShowSettings={setShowSettings} />}
      <button
        className={["btn", styles.mainBtn].join(" ")}
        onClick={clickHandler}
      >
        {langFile.start_game}
      </button>
      <button
        className={["btn", styles.mainBtn].join(" ")}
        onClick={() => setShowSettings((prev) => !prev)}
      >
        {langFile.settings}
      </button>
    </div>
  );
};

export default PageMain;
