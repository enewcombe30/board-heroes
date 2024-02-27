import { hero } from "../types/types";

interface props {
  selectedHeroes: hero[];
}

export default function PartyData({ selectedHeroes }: props) {
  const totalAttributes = selectedHeroes.reduce(
    (accumulator, currentHero) => {
      accumulator.armour += currentHero.armour;
      accumulator.damage += currentHero.damage;
      accumulator.healing += currentHero.healing;
      accumulator.health += currentHero.health;
      accumulator.points += currentHero.points;
      return accumulator;
    },
    { armour: 0, damage: 0, healing: 0, health: 0, points: 0 }
  );

  return (
    <>
      <div className="w-[10rem] h-fit border-[#98b8e3] border-2 rounded-lg bg-white p-4">
        <span className="text-xl">Party stats</span>
        <ul className="pb-4 pt-4">
          <li className="pb-0.5">
            Armor:
            <span className="text-[#41644e]">{totalAttributes.armour}</span>
          </li>
          <li className="pb-0.5">
            Damage:
            <span className="text-[#41644e]">{totalAttributes.damage}</span>
          </li>
          <li className="pb-0.5">
            Healing:{" "}
            <span className="text-[#41644e]">{totalAttributes.healing}</span>
          </li>
          <li className="pb-0.5">
            Health:{" "}
            <span className="text-[#41644e]">{totalAttributes.health}</span>
          </li>
          <li className="pb-0.5">
            Points:{" "}
            <span className="text-[#41644e]">{totalAttributes.points}</span>
          </li>
        </ul>
      </div>
    </>
  );
}
