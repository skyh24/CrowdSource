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
import { Button } from "./Button";
import { ArrowBackIos } from "@mui/icons-material";
import { useRouter } from "next/router";

const Container = styled.div`
  margin-top: 100px;
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  & > .title {
    width: 50%;
    font-size: 24px;
    font-weight: 700;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;

    & > .icon {
      width: 42px;
      height: 42px;
      border-radius: 5px;
      background-color: #d9d9d9;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
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
      flex-direction: column;
      width: 100%;
      gap: 12px;
    }
  }
`;

export const CreateForm = () => {
  const router = useRouter();

  return (
    <Container>
      <div className="title">
        <div className="icon" onClick={() => router.back()}>
          <ArrowBackIos />
        </div>
        <span> Create a task</span>
      </div>
      <div className="form">
        <div className="form-item">
          <span>Project Name: </span>
          <Input
            placeholder={`Enter the project name (e.g., "Web3 Community Interaction Tool Development").`}
          />
        </div>

        <div className="form-item">
          <span>Project Background: </span>
          <Textarea
            placeholder={`Briefly describe the project's goals and current progress, and explain why frontend development is needed. (e.g., "We are developing a Web3-based community interaction tool. The backend is complete, and we now need a frontend developer to join us and help finish the project.").`}
          />
        </div>

        <div className="form-item">
          <span>Team Goal: </span>
          <Input
            placeholder={`Describe the ultimate goal of the team (e.g., "We aim to complete the MVP within two months and launch it for testing.").`}
          />
        </div>

        <div className="form-item">
          <span>Task Description: </span>
          <Textarea
            placeholder={`Specifically describe the tasks the frontend developer will undertake. (e.g., "Design and implement the user interface, ensuring seamless interaction with the blockchain.").`}
          />
        </div>

        <div className="form-item">
          <span>Skill Requirements: </span>
          <Textarea
            placeholder={`List the required skills, such as:
- Basic HTML/CSS/JavaScript
- Proficiency in React.js or Vue.js
- Basic Web3.js or Ethers.js
- Basic UX/UI design knowledge`}
          />
        </div>
      </div>
      <Button type="submit" onClick={() => {}} />
    </Container>
  );
};
