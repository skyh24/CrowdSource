import { Button } from "@mui/material";
import { useRouter } from "next/router";
import styled from "styled-components";

const Container = styled.div`
  width: calc(100% - 48px);
  position: fixed;
  bottom: 12px;
  left: 24px;
  display: flex;
  flex-direction: row-reverse;
`;

export const Footer = () => {
  const router = useRouter();

  return (
    <Container>
      <Button
        variant="outlined"
        onClick={() => {
          router.push("create");
        }}
      >
        Create
      </Button>
    </Container>
  );
};
