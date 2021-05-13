import React from "react";
import styled from "styled-components";

function Dummy(props) {
  return <div className={`${props.className}`}>dummy</div>;
}

export default React.memo(styled(Dummy)``);
