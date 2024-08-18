import React, { useState } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

interface TextareaProps {
  placeholder: string;
}

const StyledTextarea = styled.textarea`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #f0f0f0;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  resize: none;
  height: 120px;

  &:focus {
    outline: none;
    background-color: #e0e0e0;
  }
`;

const MarkdownPreview = styled.div`
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
`;

const Textarea: React.FC<TextareaProps> = ({ placeholder }) => {
  const [text, setText] = useState("");

  return (
    <div>
      <StyledTextarea
        placeholder={placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default Textarea;
