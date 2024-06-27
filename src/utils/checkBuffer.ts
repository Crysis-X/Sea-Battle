import { shipBuffer } from "../store/useSettings";
import GetCell from "./getCell";

export type posType = "top" | "bot" | "left" | "right";
const CheckBuffer = (
  cellId: string,
  posType: posType,
  shipLength: shipBuffer,
  letters: string[]
) => {
  const data = cellId.split("");
  const char = data[0];
  const id =
    data.length == 3 ? Number([data[1], data[2]].join("")) : Number(data[1]);

  if (posType == "top") {
    for (let i = 0; i < shipLength; i++) {
      const elemId = char + (id + i);
      const elem = GetCell(elemId);
      if (!elem) return false;
      if (elem.innerHTML) {
        return false;
      }
    }
    return true;
  } else if (posType == "bot") {
    for (let i = 0; i < shipLength; i++) {
      const elemId = char + (id - i);
      const elem = GetCell(elemId);
      if (!elem) return false;
      if (elem.innerHTML) {
        return false;
      }
    }
    return true;
  } else if (posType == "left") {
    for (let i = 0; i < shipLength; i++) {
      const elemId = letters[letters.indexOf(char) - i] + id;
      const elem = GetCell(elemId);
      if (!elem) return false;
      if (elem.innerHTML) {
        return false;
      }
    }
    return true;
  } else if (posType == "right") {
    for (let i = 0; i < shipLength; i++) {
      const elemId = letters[letters.indexOf(char) + i] + id;
      const elem = GetCell(elemId);
      if (!elem) return false;
      if (elem.innerHTML) {
        return false;
      }
    }
    return true;
  }
  return false;
};

export default CheckBuffer;
