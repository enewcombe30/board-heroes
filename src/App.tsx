import SelectionDropdown from "./components/SelectionDropdown";

function App() {
  return (
    <div className="w-full h-screen bg-[#f7f8fa] py-8 font-sans">
      <div className="w-fit text-4xl mx-auto mb-16">Party picker</div>
      <div className="mx-auto">
        <SelectionDropdown />
      </div>
    </div>
  );
}

export default App;
