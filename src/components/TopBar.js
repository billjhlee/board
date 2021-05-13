import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "components/Login/UserProvider";

function TopBar(props) {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className={`${props.className}`}>
      <button
        onClick={() => {
          setUser("");
        }}
      >
        Sign Out
      </button>
    </div>
  );
}

export default React.memo(styled(TopBar)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 75px;
  padding: 12px 12px;
  text-align: end;
`);
