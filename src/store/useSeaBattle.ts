import React from "react";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type MouseEventFunction = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void;
type useSeaBattle = {
  winner: false | "first" | "second";
  ships: {
    first: string[];
    second: string[];
  };
  findedCells: {
    first: number;
    second: number;
  };
  turn: "first" | "second";
  setWinner: (player: "first" | "second") => void;
  addFindedCell: MouseEventFunction;
  addClickedCell: MouseEventFunction;
  turnToggler: () => void;
  turnChecker: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => boolean;
  addShip: (cellId: string, player: "first" | "second") => void;
};
const useSeaBattle = create<useSeaBattle>()(
  devtools((set, get) => ({
    winner: false,
    ships: {
      first: [],
      second: [],
    },
    findedCells: {
      first: 0,
      second: 0,
    },
    turn: "first",
    setWinner: (player) => {
      set(() => ({ winner: player }));
    },
    addClickedCell: (event) => {
      event.currentTarget.className = event.currentTarget.className.replace(
        "default",
        "clicked"
      );
    },
    addFindedCell: (event) => {
      event.currentTarget.className = event.currentTarget.className.replace(
        "default",
        "finded"
      );
      set((state) => {
        return {
          findedCells: {
            first: event.currentTarget.className.includes("first")
              ? state.findedCells.first + 1
              : state.findedCells.first,
            second: event.currentTarget.className.includes("second")
              ? state.findedCells.second + 1
              : state.findedCells.second,
          },
        };
      });
    },
    turnToggler: () => {
      set((state) => ({ turn: state.turn == "first" ? "second" : "first" }));
    },
    turnChecker: (event) => {
      if (get().turn == "first")
        return event.currentTarget.className.includes("first") ? false : true;
      else
        return event.currentTarget.className.includes("second") ? false : true;
    },
    addShip: (cellId, player) => {
      set((state) => {
        if (player == "first") {
          return {
            ships: {
              first: [...state.ships.first, cellId],
              second: state.ships.second,
            },
          };
        } else if (player == "second") {
          return {
            ships: {
              first: state.ships.first,
              second: [...state.ships.second, cellId],
            },
          };
        }
        return {
          ships: state.ships,
        };
      });
    },
  }))
);
export default useSeaBattle;
