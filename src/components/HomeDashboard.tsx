import styled from "styled-components";
import { TaskCard } from "./TaskCard";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 16px;
  height: 100%;
  flex-wrap: wrap;
  margin-top: 64px;

  & > .tags {
    display: flex;
    flex-direction: row;
    width: 90%;

    & > .type-selector {
      width: 150px;
    }
  }

  & > .dashboard {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px;
    width: 90%;
    height: 100%;
  }
`;

export const HomeDashboard = () => {
  const mockData = [
    {
      name: "Task 1",
      description: "This is the description for Task 1.",
    },
    {
      name: "Task 2",
      description: "This is the description for Task 2.",
    },
    {
      name: "Task 3",
      description: "This is the description for Task 3.",
    },
    {
      name: "Task 4",
      description: "This is the description for Task 4.",
    },
    {
      name: "Task 5",
      description: "This is the description for Task 5.",
    },
    {
      name: "Task 4",
      description: "This is the description for Task 4.",
    },
    {
      name: "Task 5",
      description: "This is the description for Task 5.",
    },
  ];

  const [type, setType] = useState("");

  const handleTypeChange = (event: any) => {
    setType(event.target.value);
  };

  return (
    <Container>
      <div className="tags">
        <div className="type-selector">
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
          </FormControl>
        </div>
      </div>
      <div className="dashboard">
        {mockData.map((item) => {
          return <TaskCard name={item.name} description={item.description} />;
        })}
      </div>
    </Container>
  );
};
