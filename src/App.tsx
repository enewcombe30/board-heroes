import { useState, useEffect } from "react";
import HeroSelector from "./components/HeroSelector";
import { heroList, hero, selectionOption } from "./types/types";
import { defaultHero, defaultList } from "./constants/heroes";
import PartyData from "./components/PartyData";
import { DefaultSelectionState } from "./constants/selection";

function App() {
  const [hero1, setHero1] = useState<hero>(defaultHero);
  const [hero2, setHero2] = useState<hero>(defaultHero);
  const [hero3, setHero3] = useState<hero>(defaultHero);
  const [hero4, setHero4] = useState<hero>(defaultHero);
  const [hero5, setHero5] = useState<hero>(defaultHero);
  const [selection1, setSelection1] = useState<selectionOption>(
    DefaultSelectionState
  );
  const [selection2, setSelection2] = useState<selectionOption>(
    DefaultSelectionState
  );
  const [selection3, setSelection3] = useState<selectionOption>(
    DefaultSelectionState
  );
  const [selection4, setSelection4] = useState<selectionOption>(
    DefaultSelectionState
  );
  const [selection5, setSelection5] = useState<selectionOption>(
    DefaultSelectionState
  );
  const [partyList, setPartyList] = useState<{ heroes: hero[] }>({
    heroes: [],
  });
  const [showHeroes, setShowHeroes] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const selectionList = [
    selection1,
    selection2,
    selection3,
    selection4,
    selection5,
  ].filter((selection) => selection.label !== "-");

  const fullSelection = selectionList.length === 5;

  const handleGenerate = () => {
    const generatedPartyList = [hero1, hero2, hero3, hero4, hero5].filter(
      (hero) => hero !== undefined
    );
    setPartyList({ heroes: generatedPartyList });

    if (!fullSelection) {
      setError(true);
      setShowHeroes(false);
    }
    setShowHeroes(true);
  };

  const resetHeroes = () => {
    setSelection1(DefaultSelectionState);
    setSelection2(DefaultSelectionState);
    setSelection3(DefaultSelectionState);
    setSelection4(DefaultSelectionState);
    setSelection5(DefaultSelectionState);
    setPartyList({ heroes: [] });
    setShowHeroes(false);
    setError(false);
  };

  useEffect(() => {
    !showHeroes && fullSelection && handleGenerate();
  }, [hero1, hero2, hero3, hero4, hero5]);

  return (
    <div className="w-full h-screen bg-[#f7f8fa] py-6 font-sans">
      <div className="w-fit text-4xl mx-auto mb-8">Hero selection</div>
      <div className="w-fit mx-auto space-x-[3rem] mt-[6rem] flex">
        <HeroSelector
          setPartyMember={setHero1}
          showHeroes={showHeroes}
          selection={selection1}
          setSelection={setSelection1}
          error={error}
        />
        <HeroSelector
          setPartyMember={setHero2}
          showHeroes={showHeroes}
          selection={selection2}
          setSelection={setSelection2}
          error={error}
        />
        <HeroSelector
          setPartyMember={setHero3}
          showHeroes={showHeroes}
          selection={selection3}
          setSelection={setSelection3}
          error={error}
        />
        <HeroSelector
          setPartyMember={setHero4}
          showHeroes={showHeroes}
          selection={selection4}
          setSelection={setSelection4}
          error={error}
        />
        <HeroSelector
          setPartyMember={setHero5}
          showHeroes={showHeroes}
          selection={selection5}
          setSelection={setSelection5}
          error={error}
        />
        <div className="">
          <div className="space-y-[4rem] w-[10rem] h-[4rem] ml-[2rem] border-[#41644e] border-2 rounded-full bg-green-200 cursor-pointer text-[#41644e]">
            <div
              className="mx-auto pt-[1.1rem] w-fit h-[1rem]"
              onClick={handleGenerate}
            >
              Generate
            </div>
            {showHeroes && fullSelection && (
              <PartyData selectedHeroes={partyList.heroes} />
            )}
            <div className="w-[10rem] h-[4rem] border-[#644141] border-2 rounded-full bg-red-200 cursor-pointer text-[#160f10]">
              <div
                className="mx-auto pt-[1.1rem] w-fit h-[1rem]"
                onClick={resetHeroes}
              >
                Reset
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
