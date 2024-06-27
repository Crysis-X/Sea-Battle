import GetCell from "../../utils/getCell";

const ShipSpawner = (cellId: string[], player: "first" | "second") => {
  cellId.forEach((id) => {
    const elem = GetCell(id, player);
    console.log(player);
    if (elem) {
      elem.append(document.createElement("div"));
    }
  });
};

export default ShipSpawner;
