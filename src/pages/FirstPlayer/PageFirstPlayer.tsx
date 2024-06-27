import React, { useRef } from "react";
import CellsCreater from "../../components/CellsCreater/CellsCreater";
import Field from "../../components/Field/Field";
import useSettings from "../../store/useSettings";
import PageSecondPlayer from "../SecondPlayer/PageSecondPlayer";
import ShipMenu from "../../components/ShipMenu/ShipMenu";
import CheckBuffer, { posType } from "../../utils/checkBuffer";
import ShipAdder from "../../components/ShipAdder/ShipAdder";
import useSeaBattle from "../../store/useSeaBattle";
import styles from "./PageFirstPlayer.module.css";
import useLang from "../../store/useLang";

const PageFirstPlayer = () => {
  const settings = useSettings();
  const langFile = useLang((state) => state.langFile);
  const addShip = useSeaBattle((state) => state.addShip);
  const nameSetInput = useRef<HTMLInputElement>(null);
  const posSelect = useRef<HTMLSelectElement>(null);
  function cellClickHandler(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    if (!posSelect.current) return;
    const canSpawn = CheckBuffer(
      e.currentTarget.id,
      posSelect.current.value as posType,
      settings.shipBuffer,
      langFile.letters
    );
    if (canSpawn) {
      switch (settings.shipBuffer) {
        case 1:
          if (settings.remainders.one == 0) return;
          settings.removeRemainder("one");
          break;
        case 2:
          if (settings.remainders.two == 0) return;
          settings.removeRemainder("two");
          break;
        case 3:
          if (settings.remainders.three == 0) return;
          settings.removeRemainder("three");
          break;
        case 4:
          if (settings.remainders.four == 0) return;
          settings.removeRemainder("four");
          break;
      }
      ShipAdder(
        e.currentTarget.id,
        posSelect.current.value as posType,
        settings.shipBuffer,
        "first",
        addShip,
        langFile.letters
      );
    }
  }
  function clickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (
      !(settings.remainders.one == 0) ||
      !(settings.remainders.two == 0) ||
      !(settings.remainders.three == 0) ||
      !(settings.remainders.four == 0)
    ) {
      e.preventDefault();
      return;
    }
    if (!nameSetInput.current) return;
    settings.setName("first", nameSetInput.current.value);
    settings.setBuffer(0);
    settings.restoreRemainders();
    settings.setCurrentPage(<PageSecondPlayer />);
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.settings}>
        <label
          htmlFor="name"
          className={[styles.nameLabel, styles.label].join(" ")}
        >
          Имя
        </label>
        <input
          className={styles.setName}
          name="name"
          ref={nameSetInput}
          type="text"
          placeholder={langFile.change_name}
          defaultValue={"Player 1"}
        />
        <ShipMenu />
        <label
          htmlFor="direction"
          className={[styles.directionLabel, styles.label].join(" ")}
        >
          {langFile.direction}
        </label>
        <select name="direction" ref={posSelect} className={styles.direction}>
          <option value="top">{langFile.top}</option>
          <option value="bot">{langFile.bottom}</option>
          <option value="left">{langFile.left}</option>
          <option value="right">{langFile.right}</option>
        </select>
        <button className="btn" onClick={clickHandler}>
          {langFile.continue}
        </button>
      </div>
      <Field>
        <CellsCreater player="first" clickHandler={cellClickHandler} />
      </Field>
    </div>
  );
};

export default PageFirstPlayer;
