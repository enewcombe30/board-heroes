import { useState } from "react";
import { RoleSelection } from "../constants/selection";
import { selectionOption } from "../types/types";

interface props {
  selection: selectionOption;
  setSelection: (selection: selectionOption) => void;
  error: boolean;
}

export default function SelectionDropdown({
  selection,
  setSelection,
  error,
}: props) {
  const [open, setOpen] = useState<boolean>(false);

  function renderMenu() {
    const menuItems = RoleSelection.selectionOptions.map((item, index) => {
      return (
        <li
          key={index}
          // className={`h-fit p-2 ${item.selected === true && "bg-gray"}`}
          onClick={() => setSelection(item)}
        >
          {item.label}
        </li>
      );
    });
    return menuItems;
  }
  return (
    <div
      className={`w-[10rem] h-[4rem] ${
        error === true && !open && selection.value === ""
          ? "border-[#e26260] bg-[#ffe1e1]"
          : "border-[#98b8e3] bg-white"
      }  border-2 rounded-lg  cursor-pointer`}
      onClick={() => setOpen(!open)}
    >
      <div className="mx-auto pt-[1.1rem] w-fit h-[1rem]">
        {selection.label}
      </div>
      {open && (
        <div className="w-[8rem] h-fit bg-white relative top-8 left-[1rem] p-3 rounded-md border border-[#dadde3]">
          <ul>{renderMenu()}</ul>
        </div>
      )}
    </div>
  );
}
