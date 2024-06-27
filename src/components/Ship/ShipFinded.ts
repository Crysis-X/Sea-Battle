import styles from "./Ship.module.css";
import imgFinded from "../../assets/images/finded.png";

const ShipFinded = (cell: HTMLButtonElement) => {
  const img = new Image();
  img.src = imgFinded;
  img.className = styles.img;
  cell.innerHTML = "";
  cell.append(img);
};

export default ShipFinded;
