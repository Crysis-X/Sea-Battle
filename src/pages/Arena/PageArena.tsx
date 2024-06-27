import { useEffect, useMemo, useRef } from "react";
import CellsCreater from "../../components/CellsCreater/CellsCreater";
import Field from "../../components/Field/Field";
import styles from "./PageArena.module.css";
import useSettings from "../../store/useSettings";
import useSeaBattle from "../../store/useSeaBattle";
import cellHandler from "./cellHandler";
import ShipSpawner from "../../components/ShipSpawner/ShipSpawner";
import WinnerMenu from "../../components/WinnerMenu/WinnerMenu";
import useLang from "../../store/useLang";

const PageArena = () => {
  const sw = useSeaBattle();
  const name = useSettings((state) => ({
    first: state.first.name,
    second: state.second.name,
  }));
  const langFile = useLang((state) => state.langFile);
  const wrapper = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (wrapper.current) {
      ShipSpawner(sw.ships.first, "first");
      ShipSpawner(sw.ships.second, "second");
    }
  }, []);
  useEffect(() => {
    if (sw.findedCells.first >= 20) {
      sw.setWinner("second");
    } else if (sw.findedCells.second >= 20) {
      sw.setWinner("first");
    }
  }, [sw.findedCells.first, sw.findedCells.second]);
  return (
    <div className={styles.arenaWrapper} ref={wrapper}>
      {sw.winner && <WinnerMenu />}
      <h1 className={styles.turn}>
        {langFile.turn}: {sw.turn == "first" ? name.first : name.second}
      </h1>
      <div className={styles.arena}>
        <Field player="first">
          <div className={styles.cells}>
            {useMemo(
              () => (
                <>
                  <CellsCreater
                    player="first"
                    clickHandler={(e) => cellHandler(e, sw)}
                  />
                </>
              ),
              []
            )}
          </div>
        </Field>
        <Field player="second">
          <div className={styles.cells}>
            {useMemo(
              () => (
                <>
                  <CellsCreater
                    player="second"
                    clickHandler={(e) => cellHandler(e, sw)}
                  />
                </>
              ),
              []
            )}
          </div>
        </Field>
      </div>
    </div>
  );
};

export default PageArena;
