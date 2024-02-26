import { useState, useEffect } from "react";
import HeroSelector from "./components/HeroSelector";
import { heroList, hero } from "./types/types";
import { defaultHero, defaultList } from "./constants/heroes";
import PartyData from "./components/PartyData";

function App() {
  const [hero1, setHero1] = useState<hero>(defaultHero);
  const [hero2, setHero2] = useState<hero>(defaultHero);
  const [hero3, setHero3] = useState<hero>(defaultHero);
  const [hero4, setHero4] = useState<hero>(defaultHero);
  const [hero5, setHero5] = useState<hero>(defaultHero);
  const [partyList, setPartyList] = useState<{ heroes: hero[] }>({
    heroes: [],
  });

  useEffect(() => {
    function setParty(partyMember: hero) {
      // Use the spread operator to create a new array with the existing heroes and the new party member
      setPartyList((prevPartyList) => ({
        heroes: [...prevPartyList.heroes, partyMember],
      }));
    }
    setParty(hero1);
  }, [hero1, hero2, hero3, hero4, hero5]);

  // remove above function

  // build function to add hero to party list when selected :thumbs

  // ** investigate updating the partyList dynamically
  // const partyList: heroList = { heroes: [hero1, hero2, hero3, hero4, hero5] };

  // Build function to combine party list into total stats
  // Hide stats until generate button is clicked

  console.log("Party", partyList);

  return (
    <div className="w-full h-screen bg-[#f7f8fa] py-6 font-sans">
      <div className="w-fit text-4xl mx-auto mb-8">Hero selection</div>
      <div className="w-fit mx-auto space-x-[3rem] mt-[6rem] flex">
        <HeroSelector setPartyMember={setHero1} />
        <HeroSelector setPartyMember={setHero2} />
        <HeroSelector setPartyMember={setHero3} />
        <HeroSelector setPartyMember={setHero4} />
        <HeroSelector setPartyMember={setHero5} />
        <div className="flex-none">
          <div className="w-[10rem] h-[4rem] ml-[2rem] mb-[2rem] border-[#41644e] border-2 rounded-full bg-green-200 cursor-pointer text-[#41644e]">
            <div className="mx-auto pt-[1.1rem] w-fit h-[1rem]">Generate</div>
            {/* <PartyData selectedHeroes={partyList.heroes} /> */}
          </div>
          <div className="w-[10rem] h-[4rem] hidden ml-[2rem] border-[#644141] border-2 rounded-full bg-red-200 cursor-pointer text-[#160f10]">
            <div className="mx-auto pt-[1.1rem] w-fit h-[1rem]">Reset</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
