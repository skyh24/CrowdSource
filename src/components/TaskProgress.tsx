import { Box, Divider, Rating, Step, StepLabel, Stepper } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  useAccount,
  useConnect,
  useSwitchChain,
  useWriteContract,
} from "wagmi";
import { Button } from "./Button";
import MarkdownViewer from "./MarkdownViewer";
import Confetti from "react-confetti";
import { stashContact } from "../../abi";
import { polygon } from "viem/chains";

const Container = styled.div`
  margin-top: 100px;
  width: 100%;
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  & > .content {
    padding: 20px 400px;
    height: 500px;

    & > .tip {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      margin-top: 124px;
      font-weight: 700;
    }

    & > .completed {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      margin-top: 124px;
      font-weight: 700;
      gap: 24px;

      & > .tip {
        display: flex;
        align-items: center;
        gap: 24px;
        font-size: 22px;

        font-weight: 600;
      }
    }

    & > .title {
      width: 50%;
      font-size: 24px;
      margin-top: 24px;
      font-weight: 700;
    }
  }

  & > .buttons {
    & > .buttons-step2 {
      display: flex;
      gap: 8px;
    }
  }
`;

const TaskProgress = () => {
  const {
    data: airdrop,
    isSuccess: airdropIsSuccess,
    isError: airdropIsError,
    error: airdropError,
    writeContractAsync: airdropWrite,
  } = useWriteContract();

  const steps = ["Project Pending", "Project In Progress", "Project Complete"];
  const { chainId, address } = useAccount();
  const { connect, connectors } = useConnect();
  const [active, setActive] = useState(2);
  const [value, setValue] = useState<number | null>(2);
  const { switchChainAsync } = useSwitchChain();

  const handleNext = async () => {
    if (active < steps.length) {
      setActive(active + 1);
    }

    // if (chainId != stashContact.chainId) {
    //   await switchChainAsync({
    //     chainId: stashContact.chainId,
    //   });
    // }
    // await airdropWrite({
    //   ...stashContact,
    //   chainId: 11155111,
    //   address: "0x312Ce0CBE7F0912f57DE4476abe992CaEFf5e207",
    //   functionName: "deposit",
    // });

    // if (airdropIsSuccess) {
    //   setActive(active + 1);
    // }
  };

  const renderContent = () => {
    switch (active) {
      case 0:
        return (
          <>
            <div className="title">Design Style:</div>
            <MarkdownViewer
              content={`- **Colors**: Use of modern, tech-inspired colors like deep blue, electric purple, and bright accents (neon green, electric blue).
- **Typography**: Clean, sans-serif fonts that convey a modern and professional feel. Titles should be bold and eye-catching.
- **Graphics**: Incorporate blockchain-related graphics such as nodes, chains, and network visualizations. A balance between abstract and geometric elements.
- **Imagery**: Use high-quality images of previous conferences, speaker headshots, and futuristic cityscapes.
- **Layout**: Clear hierarchy of information, with the title and date prominently displayed. Ensure all text is legible, even from a distance.`}
            />
            <Divider />
            <div className="title">Deadline:</div>
            <MarkdownViewer
              content={`- **Initial Concept Submission**: September 15, 2024
- **First Draft**: September 22, 2024
- **Final Design Submission**: October 1, 2024.`}
            />
            <Divider />
          </>
        );
      case 1:
        return (
          <div className="tip">
            Please both parties confirm the project progress individually.
          </div>
        );
      case 2:
        return (
          <div className="tip">
            Please confirm whether the project is completed.
          </div>
        );
      case 3:
        return (
          <div className="completed">
            Congratulations! The project is completed.
            <div className="tip">
              <div>Please rate</div>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderButton = () => {
    switch (active) {
      case 0:
        return <Button type="Stake 50% to Start Work" onClick={handleNext} />;
      case 1:
        return (
          <div className="buttons-step2">
            <Button
              type="There are some controversies."
              color="#c26c6c"
              onClick={handleNext}
            />
            <Button
              type="Confirm project progress, stake the remaining 50%."
              onClick={handleNext}
            />
          </div>
        );
      case 2:
        return (
          <div className="buttons-step2">
            <Button
              type="There are some controversies."
              color="#c26c6c"
              onClick={handleNext}
            />
            <Button type="Confirm project completion." onClick={handleNext} />
          </div>
        );
      case 3:
        return <Button type="Submit Rating" onClick={() => {}} />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <Box sx={{ width: "80%" }}>
        <Stepper activeStep={active} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <div className="content">{renderContent()}</div>

      <div className="buttons">{renderButton()}</div>

      {active === 3 && <Confetti recycle={false} />}
    </Container>
  );
};

export default TaskProgress;
