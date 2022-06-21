import { atom } from "recoil";

export const currentCompanyIdAtom = atom<number>({
  key: "currentCompanyIdAtom",
  default: 0,
});
