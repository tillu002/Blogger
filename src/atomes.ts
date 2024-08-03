import { atom } from "recoil";

export const userIdAtom = atom({
  key: "userIdAtom",
  default: "",
});

export const publishMessageAtom = atom({
  key: "publishMessageAtom",
  default: "",
});
