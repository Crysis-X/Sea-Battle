const BorderCleaner = (elems: HTMLElement[]) => {
  elems.forEach((elem) => {
    elem.style.border = "none";
  });
};

export default BorderCleaner;
