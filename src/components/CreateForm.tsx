import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import Textarea from "./Textarea";

const Container = styled.div`
  margin-top: 100px;
  width: 100%;
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  & > .title {
    width: 50%;
    font-size: 24px;
    font-weight: 700;
  }

  & > .form {
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 10px;

    display: flex;
    flex-direction: column;

    gap: 24px;

    & > .form-item {
      display: flex;
      align-items: center;
    }
  }
`;

export const CreateForm = () => {
  const [type, setType] = useState("");

  const handleTypeChange = (event: any) => {
    setType(event.target.value);
  };

  return (
    <Container>
      <div className="title">Create a task</div>
      <div className="form">
        <div>
          <span>Project Name: </span>
          <Input placeholder="1" />
        </div>

        <Textarea placeholder="11" />
      </div>
    </Container>
  );
};
