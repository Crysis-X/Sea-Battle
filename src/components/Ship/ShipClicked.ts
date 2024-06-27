import styles from "./Ship.module.css";
import imgClicked from "../../assets/images/clicked.png";

const ShipClicked = (cell: HTMLButtonElement) => {
  const img = new Image();
  img.src = imgClicked;
  img.className = styles.img;
  cell.innerHTML = "";
  cell.append(img);
};

export default ShipClicked;
