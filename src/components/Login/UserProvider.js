import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

import useUser from "hooks/useUser";
import Login from "components/Login";

export const UserContext = React.createContext(null);

function UserProvider(props) {
  const [user, setUser] = useUser();
  const [showOverlay, setShowOverlay] = useState(user === "");

  useEffect(() => {
    if (user === "") {
      setShowOverlay(true);
    } else {
      setShowOverlay(false);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className={`${props.className}`}>
        {showOverlay && (
          <div className="up__overlay">
            <Container>
              <Login
                close={() => {
                  setShowOverlay(false);
                }}
              />
            </Container>
          </div>
        )}
        {props.children}
      </div>
    </UserContext.Provider>
  );
}

export default React.memo(styled(UserProvider)`
  .up__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`);
