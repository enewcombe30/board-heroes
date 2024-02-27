import { useState, useEffect } from "react";
import { selectionOption, heroPool, hero } from "../types/types";
import { DefaultSelectionState } from "../constants/selection";
import SelectionDropdown from "./SelectionDropdown";
import { pools } from "../constants/heroPools";
import { defaultHero } from "../constants/heroes";
import HeroData from "./HeroData";

interface props {
  setPartyMember: (setSelectedHero: hero) => void;
  showHeroes: boolean;
  setSelection: (selection: selectionOption) => void;
  selection: selectionOption;
  error: boolean;
}

export default function HeroSelector({
  setPartyMember,
  showHeroes,
  setSelection,
  selection,
  error,
}: props) {
  // const [selection, setSelection] = useState<selectionOption>(
  //   DefaultSelectionState
  // );

  const [selectedHero, setSelectedHero] = useState<hero>(defaultHero);

  useEffect(() => {
    filterPools();
    selectedPools && setSelectedHero(getRandomHero(selectedPools));
    // Add function here to pass selected hero to party list with spread operator
    // Ensure selection/reroll replaces current hero
  }, [selection]);

  const filterPools = () => {
    const foundPool =
      selection &&
      pools.heroPools.find((pool) => pool.value === selection.value);
    return foundPool;
  };

  const selectedPools = filterPools();

  function getRandomHero(filteredHeroes: heroPool) {
    const randomIndex = Math.floor(
      Math.random() * filteredHeroes.selectionPool.heroes.length
    );
    const hero = filteredHeroes.selectionPool.heroes[randomIndex];
    setPartyMember(hero);
    return hero;
  }

  function reRoll() {
    selectedPools && setSelectedHero(getRandomHero(selectedPools));
  }

  return (
    <div className="flex-none">
      <div>
        <div className="mb-[3rem]">
          <SelectionDropdown
            selection={selection}
            setSelection={setSelection}
            error={error}
          />
        </div>
        {selectedHero && selectedHero.role !== "" && showHeroes && (
          <HeroData selectedHero={selectedHero} reRoll={reRoll} />
        )}
      </div>
    </div>
  );
}
