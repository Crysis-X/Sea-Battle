import shipTop from "../images/ship-top.png";
import shipCenter from "../images/ship-center.png";
import shipBot from "../images/ship-bot.png";
import shipOne from "../images/one.png";

type arrayOfImages = {
  [key: string]: string[];
};
const arrayOfImages: arrayOfImages = {
  "1": [shipOne],
  "2": [shipTop, shipBot],
  "3": [shipTop, shipCenter, shipBot],
  "4": [shipTop, shipCenter, shipCenter, shipBot],
};
export default arrayOfImages;
