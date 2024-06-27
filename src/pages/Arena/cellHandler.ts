import ShipClicked from "../../components/Ship/ShipClicked";
import ShipFinded from "../../components/Ship/ShipFinded";
import useSeaBattle from "../../store/useSeaBattle";

export default function cellHandler(
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  sw: useSeaBattle
) {
  if (sw.turnChecker(e)) {
    const cell = e.currentTarget;
    if (
      cell.className.includes("clicked") ||
      cell.className.includes("finded")
    ) {
      e.preventDefault();
      return;
    }
    if (cell.className.includes("default")) {
      cell.className = cell.className.replace(
        "default",
        cell.innerHTML ? "finded" : "clicked"
      );
      if (cell.innerHTML) {
        ShipFinded(cell);
        sw.addFindedCell(e);
        sw.turnToggler();
      } else {
        ShipClicked(cell);
      }
    }
    sw.turnToggler();
  }
}
