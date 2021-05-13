import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import "./App.css";

import UserScreen from "components/UserScreen";
import ExpertScreen from "components/ExpertScreen";

import UserProvider, { UserContext } from "components/Login/UserProvider";
import TopBar from "components/TopBar";
import useTheme from "hooks/useTheme";
import theme from "./theme";

function App(props) {
  const [_theme, switchLight, switchDark] = useTheme();
  const { user, setUser } = useContext(UserContext);
  console.log(user, setUser);

  useEffect(() => {
    console.log("hello", user);
  }, [user]);

  return (
    <ThemeProvider theme={theme[_theme]}>
      {user !== "" && <TopBar />}
      <div className={`${props.className}`}>
        {user !== "" && (user[0] === "1" ? <UserScreen /> : <ExpertScreen />)}
      </div>
    </ThemeProvider>
  );
}

export default styled(App)`
  width: 100%;
`;
