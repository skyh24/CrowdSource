import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

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
    background-color: #9898a6;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 24px 100px;
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
          <span>Name: </span>
          <TextField required id="standard-basic" variant="standard" />
        </div>

        {/* 
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="Type"
            onChange={handleTypeChange}
          >
            <MenuItem value={"Code"}>{"Code"}</MenuItem>
            <MenuItem value={"Code"}>{"Code"}</MenuItem>
            <MenuItem value={"Code"}>{"Code"}</MenuItem>
            <MenuItem value={"Code"}>{"Code"}</MenuItem>
          </Select>
        </FormControl> */}
        <TextField
          required
          id="standard-multiline-flexible"
          label="Description"
          multiline
          maxRows={24}
          variant="standard"
        />
      </div>
    </Container>
  );
};
