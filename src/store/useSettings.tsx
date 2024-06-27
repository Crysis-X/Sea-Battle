import { create } from "zustand";
import PageMain from "../pages/Main/PageMain";
import lang_eng from "../lang/lang_eng";

type Player = {
  name: string;
};
export type shipBuffer = 1 | 2 | 3 | 4 | 0;
export type Settings = {
  remainders: {
    one: number;
    two: number;
    three: number;
    four: number;
  };
  shipBuffer: shipBuffer;
  first: Player;
  second: Player;
  currentPage: JSX.Element;
  setCurrentPage: (page: JSX.Element) => void;
  setName: (player: "first" | "second", newName: string) => void;
  setBuffer: (buffer: shipBuffer) => void;
  removeRemainder: (type: "one" | "two" | "three" | "four") => void;
  restoreRemainders: () => void;
};
const useSettings = create<Settings>((set) => {
  return {
    remainders: {
      one: 4,
      two: 3,
      three: 2,
      four: 1,
    },
    shipBuffer: 0,
    first: {
      name: "Player 1",
    },
    second: {
      name: "Player 2",
    },
    currentPage: <PageMain />,
    langFile: lang_eng,
    setCurrentPage: (page) => {
      set(() => ({ currentPage: page }));
    },
    setName: (player, newName) => {
      set((state) => ({
        [player]: { ...state[player], name: newName },
      }));
    },
    setBuffer: (buffer: shipBuffer) => {
      set(() => ({
        shipBuffer: buffer,
      }));
    },
    removeRemainder: (type) => {
      set((state) => ({
        remainders: {
          ...state.remainders,
          [type]: state.remainders[type] - 1,
        },
      }));
    },
    restoreRemainders: () => {
      set(() => ({
        remainders: {
          one: 4,
          two: 3,
          three: 2,
          four: 1,
        },
      }));
    },
  };
});
export default useSettings;
