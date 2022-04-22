import { atom } from "recoil";

export const optionSelectName = atom<string>({
  key: "selectNameAtom",
  default: "등록한 면접 후기",
});
