import { useCallback, useState } from "react";
import HeroSelector from "./components/HeroSelector";
import { hero, heroList } from "./types/types";
import { defaultList, defaultHero } from "./constants/heroes";

function App() {
  const [party, setParty] = useState<heroList>(defaultList);
  const [showHeroes, setShowHeroes] = useState<boolean>(false);
  const [hero1, setHero1] = useState<hero>(defaultHero);
  const [hero2, setHero2] = useState<hero>(defaultHero);
  const [hero3, setHero3] = useState<hero>(defaultHero);
  const [hero4, setHero4] = useState<hero>(defaultHero);
  const [hero5, setHero5] = useState<hero>(defaultHero);

  const createParty = useCallback(() => {
    const selectedHeroes: hero[] = [hero1, hero2, hero3, hero4, hero5];
  }, [hero1, hero2, hero3, hero4, hero5]);

  return (
    <div className="w-full h-screen bg-[#f7f8fa] py-8 font-sans">
      <div className="w-fit text-4xl mx-auto mb-16">Hero selection</div>
      <div className="w-fit mx-auto space-x-[3rem] mt-[10rem] flex">
        <HeroSelector />
        <HeroSelector />
        <HeroSelector />
        <HeroSelector />
        <HeroSelector />
        <div className="w-[10rem] h-[4rem] ml-[2rem] border-[#41644e] border-2 rounded-full bg-green-200 cursor-pointer text-[#41644e]">
          <div className="mx-auto pt-[1.1rem] w-fit h-[1rem]">Generate</div>
        </div>
      </div>
    </div>
  );
}

export default App;
