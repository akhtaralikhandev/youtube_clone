import { createContext } from "react";
export const sideBarContext = createContext({
  marginLeft_: "",
  display: "",
  signInHeight: "",
  category: "",
  words: "",
  navbarDisplay: "",
  setDisplay: (word: string) => {},
  setMarginLeft: (word: string) => {},
  setNavbarDisplay: (word: string) => {},
  setSignInHeight: (word: string) => {},
  setCategory: (word: string) => {},
  setWords: (word: string) => {},
});
