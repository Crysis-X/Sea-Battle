const GetCell = (cellId: string, player?: "first" | "second") => {
  let value: Element | false = false;
  if (player) {
    const arr = document.querySelectorAll("#" + cellId);
    for (let i = 0; i < arr.length; i++) {
      const cell = arr[i];
      if (cell.className.includes(player)) {
        value = cell;
        break;
      }
    }
  } else {
    const elem = document.getElementById(cellId);
    if (elem) {
      value = elem;
      return value;
    } else {
      value = false;
      return value;
    }
  }
  return value;
};

export default GetCell;
