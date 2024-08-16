import React from "react";
import styled from "styled-components";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "@mui/material";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 48px);
  position: fixed;
  top: 24px;
  left: 24px;
`;

export const Header = () => {
  return (
    <Container>
      <Button variant="outlined">Mine</Button>
      <ConnectButton />
    </Container>
  );
};
