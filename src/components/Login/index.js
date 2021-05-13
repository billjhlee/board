import React, { useEffect, useState, useContext, createContext } from "react";
import styled from "styled-components";

import userImg from "assets/images/usr.png";
import expImg from "assets/images/exp.png";
import { UserContext } from "./UserProvider";

const IDS = {
  1: ["john", "jake", "josh"],
  2: ["hanna", "hailey", "heike"],
};

function Login(props) {
  //unselected, user, expert
  const [userType, setUserType] = useState(0);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    console.log("login", user);
  }, [user]);

  return (
    <div className={`${props.className}`}>
      {userType === 0 && (
        <>
          <div className="login__card" onClick={() => setUserType(1)}>
            <h1>User</h1>
            <img src={userImg} />
          </div>
          <div className="login__card" onClick={() => setUserType(2)}>
            <h1>Expert</h1>
            <img src={expImg} />
          </div>
        </>
      )}
      {userType !== 0 && (
        <ul>
          {IDS[userType].map((id, ind) => (
            <li
              key={`${id}`}
              onClick={() => {
                setUser(`${userType}${IDS[userType][ind]}`);
              }}
            >
              {id}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default React.memo(styled(Login)`
  display: flex;
  justify-content: center;

  ul {
    list-style-type: none;

    li {
      padding: 12px;
      cursor: pointer;
      &:hover {
        transform: scale(1.2);
      }
    }
  }

  .login__card {
    cursor: pointer;
    padding: 24px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);

    &:first-child {
      margin-right: 26px;
    }

    &:hover {
      transform: scale(1.05);
    }
  }

  .login__select {
  }
`);
