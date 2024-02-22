import { hero } from "../types/types";

interface props {
  selectedHero: hero;
  reRoll?: () => void;
}

export default function HeroData({ selectedHero, reRoll }: props) {
  return (
    <>
      <div className="w-[10rem] h-fit border-[#98b8e3] border-2 rounded-lg bg-white">
        <ul className="pl-4 pt-4 pb-4">
          <li className="pb-0.5">
            Hero: <span className="text-[#41644e]">{selectedHero.name}</span>
          </li>
          <li className="pb-0.5">
            Role: <span className="text-[#41644e]">{selectedHero.role}</span>
          </li>
          <li className="pb-0.5">
            Armor: <span className="text-[#41644e]">{selectedHero.armour}</span>
          </li>
          <li className="pb-0.5">
            Damage:{" "}
            <span className="text-[#41644e]">{selectedHero.damage}</span>
          </li>
          <li className="pb-0.5">
            Healing:{" "}
            <span className="text-[#41644e]">{selectedHero.healing}</span>
          </li>
          <li className="pb-0.5">
            Health:{" "}
            <span className="text-[#41644e]">{selectedHero.health}</span>
          </li>
          <li className="pb-0.5">
            Points:{" "}
            <span className="text-[#41644e]">{selectedHero.points}</span>
          </li>
          {selectedHero.grade && (
            <li className="pr-4">
              <div
                className={`${
                  selectedHero.grade === "Best"
                    ? "text-[#41644e]"
                    : "text-[#972e2e]"
                } text-lg ml-auto w-fit`}
              >
                {selectedHero.grade}
              </div>
            </li>
          )}
        </ul>
      </div>
      <div
        className="w-[6rem] h-[2rem] mx-auto border-[#76a2b6] border-t-0 border-2 rounded-lg rounded-tl-none rounded-tr-none bg-blue-200 cursor-pointer text-[#41644e] space-y-none"
        onClick={() => reRoll && reRoll()}
      >
        <div className="m-auto w-fit h-fit text-sm">ReRoll</div>
      </div>
    </>
  );
}
