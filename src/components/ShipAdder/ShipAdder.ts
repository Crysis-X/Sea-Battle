import arrayOfImages from "../../assets/data/arrayOfImages";
import { shipBuffer } from "../../store/useSettings";
import { posType } from "../../utils/checkBuffer";
import GetCell from "../../utils/getCell";

const ShipAdder = (
  cellId: string,
  posType: posType,
  shipLength: shipBuffer,
  player: "first" | "second",
  addShip: Function,
  letters: string[]
) => {
  const data = cellId.split("");
  const char = data[0];
  const id =
    data.length == 3 ? Number([data[1], data[2]].join("")) : Number(data[1]);
  if (posType == "bot") {
    for (let i = 0; i < shipLength; i++) {
      const elemId = char + (id - i);
      const img = new Image();
      img.style.width = "100%";
      img.src = arrayOfImages[shipLength.toString()][i];
      const elem = GetCell(elemId);
      if (elem) elem.append(img);
      addShip(elemId, player);
      if (i + 1 == shipLength) img.style.transform = "rotate(180deg)";
      if (i == 0) img.style.transform = "rotate(180deg)";
    }
  } else if (posType == "top") {
    for (let i = 0; i < shipLength; i++) {
      const elemId = char + (id + i);
      const img = new Image();
      img.style.width = "100%";
      img.src = arrayOfImages[shipLength.toString()][i];
      const elem = GetCell(elemId);
      if (elem) elem.append(img);
      addShip(elemId, player);
    }
  } else if (posType == "left") {
    for (let i = 0; i < shipLength; i++) {
      const elemId = letters[letters.indexOf(char) - i] + id;
      const img = new Image();
      img.style.width = "100%";
      img.src = arrayOfImages[shipLength.toString()][i];
      const elem = GetCell(elemId);
      if (elem) elem.append(img);
      addShip(elemId, player);
      if (i + 1 == shipLength) img.style.transform = "rotate(90deg)";
      if (i == 0) img.style.transform = "rotate(90deg)";
    }
  } else if (posType == "right") {
    for (let i = 0; i < shipLength; i++) {
      const elemId = letters[letters.indexOf(char) + i] + id;
      const img = new Image();
      img.style.width = "100%";
      img.src = arrayOfImages[shipLength.toString()][i];
      const elem = GetCell(elemId);
      if (elem) elem.append(img);
      addShip(elemId, player);
      if (i + 1 == shipLength) img.style.transform = "rotate(270deg)";
      if (i == 0) img.style.transform = "rotate(270deg)";
    }
  }
};

export default ShipAdder;
