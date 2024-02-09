// Input all types below

export type hero = {
  name: string;
  armour: number;
  damage: number;
  healing: number;
  health: number;
  points: number;
  grade: string;
};

export type heroList = {
  role: string;
  heroes: hero[];
};

export type selectionOptions = {
  tank: boolean;
  dps: boolean;
  healer: boolean;
  notTank: boolean;
  notDps: boolean;
  notHealer: boolean;
  any: boolean;
  empty: boolean;
};
