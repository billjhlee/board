import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";

import UserProvider from "components/Login/UserProvider";
import App from "App";
import useTheme from "hooks/useTheme";
import theme from "./theme";

function AppWrapper(props) {
  const [_theme, switchLight, switchDark] = useTheme();

  return (
    <ThemeProvider theme={theme[_theme]}>
      <UserProvider>
        <App />
      </UserProvider>
    </ThemeProvider>
  );
}

export default AppWrapper;
