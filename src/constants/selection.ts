import { selectionOption, selectionOptions } from "../types/types";

export const DefaultSelectionState: selectionOption = {
  label: "-",
  value: "",
  selected: false,
};

export const RoleSelection: selectionOptions = {
  selectionOptions: [
    { label: "Tank", value: "tank", selected: false },
    { label: "DPS", value: "dps", selected: false },
    { label: "Healer", value: "healer", selected: false },
    { label: "Not Tank", value: "!tank", selected: false },
    { label: "Not DPS", value: "!dps", selected: false },
    { label: "Not healer", value: "!healer", selected: false },
    { label: "Any", value: "all", selected: false },
    { label: "Empty", value: "", selected: false },
  ],
};
