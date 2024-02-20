import { useState } from "react";
import { RoleSelection, DefaultSelectionState } from "../constants/selection";
import { selectionOption } from "../types/types";

export default function SelectionDropdown() {
  const [selection, setSelection] = useState<selectionOption>(
    DefaultSelectionState
  );
  const [open, setOpen] = useState<boolean>(false);

  function renderMenu() {
    const menuItems = RoleSelection.selectionOptions.map((item, index) => {
      return (
        <li
          key={index}
          className={`h-fit m-2 ${item.selected === true && "bg-gray"}`}
          onClick={() => setSelection(item)}
        >
          {item.label}
        </li>
      );
    });
    return menuItems;
  }
  return (
    <div className="mx-6">
      <div
        className="w-[10rem] h-[4rem] border-[#98b8e3] border-2 rounded-lg bg-white cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="mx-auto pt-[1.1rem] w-fit h-[1rem]">
          {selection.label}
        </div>
        {open && (
          <div className="w-[8rem] h-fit bg-white relative top-6 left-[8rem] p-3 rounded-md border border-[#dadde3]">
            <ul>{renderMenu()}</ul>
          </div>
        )}
      </div>
    </div>
  );
}
