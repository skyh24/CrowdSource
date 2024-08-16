import { TextField } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 100px;
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;

  & > .form {
    width: 80%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const CreateForm = () => {
  return (
    <Container>
      <div className="form">
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </div>
    </Container>
  );
};
