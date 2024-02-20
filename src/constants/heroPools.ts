import { heroPool } from "../types/types";
import { tankList, healerList, dpsList } from "./heroes";

export const tankPool: heroPool = {
  value: "tank",
  selectionPool: [tankList],
};

export const healerPool: heroPool = {
  value: "healer",
  selectionPool: [healerList],
};

export const dpsPool: heroPool = {
  value: "dps",
  selectionPool: [dpsList],
};

export const notTank: heroPool = {
  value: "!tank",
  selectionPool: [healerList, dpsList],
};

export const notHealer: heroPool = {
  value: "!healer",
  selectionPool: [tankList, dpsList],
};

export const notDps: heroPool = {
  value: "!dps",
  selectionPool: [tankList, healerList],
};

export const anyHero: heroPool = {
  value: "all",
  selectionPool: [tankList, healerList, dpsList],
};

export const noHero: heroPool = {
  value: "",
  selectionPool: [],
};
