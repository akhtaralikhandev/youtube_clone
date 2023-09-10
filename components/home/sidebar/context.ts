import { createContext } from "react";
export const sideBarContext = createContext({
  marginLeft_: "",
  display: "",
  signInHeight: "",
  category: "",
  setDisplay: (word: string) => {},
  setMarginLeft: (word: string) => {},
  navbarDisplay: "",
  setNavbarDisplay: (word: string) => {},
  setSignInHeight: (word: string) => {},
  setCategory: (word: string) => {},
});
