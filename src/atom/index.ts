import { atom } from "recoil";

export const historyItems = atom({
  key: "historyItems",
  default: [{ squares: Array(9).fill(null)}]
});

export const stepNumber = atom({
  key: "step",
  default: 0
});

export const xIsNext = atom({
  key: "xIsNext",
  default: true
});