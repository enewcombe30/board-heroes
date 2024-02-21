import { hero, heroList, heroPool, heroPools } from "../types/types";
import { tankList, healerList, dpsList } from "./heroes";

const notTankList = healerList.heroes.concat(dpsList.heroes);
const notHealerList = tankList.heroes.concat(dpsList.heroes);
const notDpsList = tankList.heroes.concat(healerList.heroes);
const allHeroes = notDpsList.concat(tankList.heroes);

const tankPool: heroPool = {
  value: "tank",
  selectionPool: tankList,
};

const healerPool: heroPool = {
  value: "healer",
  selectionPool: healerList,
};

const dpsPool: heroPool = {
  value: "dps",
  selectionPool: dpsList,
};

const notTank: heroPool = {
  value: "!tank",
  selectionPool: { heroes: notTankList },
};

const notHealer: heroPool = {
  value: "!healer",
  selectionPool: { heroes: notHealerList },
};

const notDps: heroPool = {
  value: "!dps",
  selectionPool: { heroes: notDpsList },
};

const anyHero: heroPool = {
  value: "all",
  selectionPool: { heroes: allHeroes },
};

const noHero: heroPool = {
  value: "",
  selectionPool: { heroes: [] },
};

export const pools: heroPools = {
  heroPools: [
    tankPool,
    healerPool,
    dpsPool,
    notTank,
    notHealer,
    notDps,
    anyHero,
    noHero,
  ],
};
