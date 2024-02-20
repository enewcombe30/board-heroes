import { useState } from "react";
import { selectionOption } from "../types/types";
import { DefaultSelectionState } from "../constants/selection";
import SelectionDropdown from "./SelectionDropdown";
import { tankPool, notTank } from "../constants/heroPools";

export default function HeroSelector() {
  const hero = tankPool.selectionPool[0].heroes[8];
  const [selection, setSelection] = useState<selectionOption>(
    DefaultSelectionState
  );

  const random = () => [
    Math.floor(notTank.selectionPool[0].heroes.length * Math.random()) | 0,
  ];
  console.log(notTank.selectionPool[0].heroes);
  console.log(random);
  return (
    <div className="flex-none space-y-[3rem]">
      <SelectionDropdown selection={selection} setSelection={setSelection} />
      {/* Update when hero passed to component */}
      {hero === tankPool.selectionPool[0].heroes[7] && (
        // Combine and build into separate component
        // Look at mapping through <li> to reduce
        <div className="w-[10rem] h-fit border-[#98b8e3] border-2 rounded-lg bg-white">
          <ul className="pl-4 pt-4 pb-4">
            <li className="pb-0.5">
              Hero: <span className="text-[#41644e]">{hero.name}</span>
            </li>
            <li className="pb-0.5">
              Role: <span className="text-[#41644e]">{hero.role}</span>
            </li>
            <li className="pb-0.5">
              Armor: <span className="text-[#41644e]">{hero.armour}</span>
            </li>
            <li className="pb-0.5">
              Damage: <span className="text-[#41644e]">{hero.damage}</span>
            </li>
            <li className="pb-0.5">
              Healing: <span className="text-[#41644e]">{hero.healing}</span>
            </li>
            <li className="pb-0.5">
              Health: <span className="text-[#41644e]">{hero.health}</span>
            </li>
            <li className="pb-0.5">
              Points: <span className="text-[#41644e]">{hero.points}</span>
            </li>
            {hero.grade && (
              <li className="pr-4">
                <div
                  className={`${
                    hero.grade === "Best" ? "text-[#41644e]" : "text-[#972e2e]"
                  } text-lg ml-auto w-fit`}
                >
                  {hero.grade}
                </div>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
