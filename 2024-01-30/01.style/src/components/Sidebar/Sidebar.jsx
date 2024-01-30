import React from "react";
import styled from "styled-components";
import { useState } from "react";

function Sidebar() {
  const [bgColor, setBgColor] = useState("aqua");
  const handleClickColorSelector = (color) => {
    setBgColor(color);
  };

  return (
    <Wrapper bgColor={bgColor}>
      <div>
        <button onClick={() => handleClickColorSelector("red")}>빨강</button>
        <button onClick={() => handleClickColorSelector("blue")}>파랑</button>
        <button onClick={() => handleClickColorSelector("green")}>그린</button>
        <button onClick={() => handleClickColorSelector("yellow")}>노랑</button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  ${(props) => {
    console.log(props.bgColor);
  }};
  background-color: aqua;
`;

export default Sidebar;
