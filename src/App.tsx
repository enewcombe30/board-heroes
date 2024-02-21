import HeroSelector from "./components/HeroSelector";

function App() {
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
