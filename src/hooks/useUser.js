import React, { useState, useEffect } from "react";
import useStore from "./useStore";

export default function useUser() {
  const [getLastValue, setLastValue] = useStore("options:user", "user");
  const [user, setUser] = useState(getLastValue());

  useEffect(() => {
    setLastValue(user);
  }, [user]);

  return [user, setUser];
}
