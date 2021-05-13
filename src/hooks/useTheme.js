import React, { useContext, useState } from "react";
import useStore from "./useStore";

export const themeContext = React.createContext();
export const useThemeContext = () => useContext(themeContext);

export default function useTheme() {
  const [getLastValue, setLastValue] = useStore("options:theme", "theme");
  const [theme, setTheme] = useState(getLastValue() || "dark");

  const switchLight = () => {
    setLastValue("light");
    setTheme("light");
  };

  const switchDark = () => {
    setLastValue("dark");
    setTheme("dark");
  };

  return [theme, switchLight, switchDark];
}
