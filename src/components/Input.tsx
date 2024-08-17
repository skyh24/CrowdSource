import React from "react";
import styled from "styled-components";

interface InputProps {
  placeholder: string;
}

const StyledInput = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #f0f0f0; /* 浅灰色背景 */
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;

  &:focus {
    outline: none;
    background-color: #e0e0e0; /* 聚焦时稍微变暗 */
  }
`;

const Input: React.FC<InputProps> = ({ placeholder }) => {
  return <StyledInput placeholder={placeholder} />;
};

export default Input;
