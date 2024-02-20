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

export type heroPool = {
  value: string;
  selectionPool: heroList[];
};

export type selectionOption = {
  label: string;
  value: string;
  selected: boolean;
};

export type selectionOptions = {
  selectionOptions: selectionOption[];
};
