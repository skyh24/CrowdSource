import React from "react";
import styled from "styled-components";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Home, Logo, Message } from "../common/svgs";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EmailIcon from "@mui/icons-material/Email";
import { useRouter } from "next/router";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 48px);
  position: fixed;
  top: 24px;
  left: 24px;

  & svg {
    width: 100px;
    height: 50px;
  }

  & > .logo {
    cursor: pointer;
  }

  & > .buttons {
    display: flex;
    align-items: center;
    gap: 12px;

    & > .button {
      border-radius: 10px;
      padding: 4px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: box-shadow 0.3s ease;

      &:hover {
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
      }

      & svg {
        width: 32px;
        height: 32px;
      }
    }
  }
`;

export const Header = () => {
  const router = useRouter();

  return (
    <Container>
      <div
        className="logo"
        onClick={() => {
          router.push("/");
        }}
      >
        <Logo />
      </div>

      <div className="buttons">
        <ConnectButton
          accountStatus="address"
          chainStatus="none"
          showBalance={false}
        />
        <div
          className="button"
          onClick={() => {
            router.push("mine");
          }}
        >
          <Home />
        </div>
        <div className="button">
          <Message />
        </div>
      </div>
    </Container>
  );
};
