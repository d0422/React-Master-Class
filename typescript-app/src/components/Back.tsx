import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const BackBtn = styled.button`
  font-size: 40px;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};
  border-width: 0;
`;
const Back = () => {
  const navi = useNavigate();
  return <BackBtn onClick={() => navi(-1)}>&lt;</BackBtn>;
};

export default Back;
