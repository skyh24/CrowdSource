import React from "react";
import styled from "styled-components";

interface TextareaProps {
  placeholder: string;
}

const StyledTextarea = styled.textarea`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #f0f0f0; /* 浅灰色背景 */
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  resize: none;
  height: 120px; /* 大约五行高度 */

  &:focus {
    outline: none;
    background-color: #e0e0e0; /* 聚焦时稍微变暗 */
  }
`;

const Textarea: React.FC<TextareaProps> = ({ placeholder }) => {
  return <StyledTextarea placeholder={placeholder} />;
};

export default Textarea;
