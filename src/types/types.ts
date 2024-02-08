// Input all types below

export type hero = {
  role: string;
  armour: number;
  damage: number;
  healing: number;
  health: number;
  points: number;
  grade: string;
};

export type heroList = {
  class: string;
  heroes: hero[];
};
