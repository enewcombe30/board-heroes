import { useState } from "react";
export default function SelectionDropdown() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="mx-6">
      <div
        className="w-[10rem] h-[4rem] border-[#98b8e3] border-2 rounded-lg bg-white cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="mx-auto pt-[1.1rem] w-fit h-[1rem]">Not Healer</div>
        {open && (
          <div className="w-[8rem] h-[10rem] bg-white relative top-6 left-[5rem] p-3 rounded-md border border-[#dadde3]">
            Menu Item
          </div>
        )}
      </div>
    </div>
  );
}
