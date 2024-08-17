import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  TextField,
  Typography,
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

const TaskProgress = () => {
  const steps = [
    {
      label: "Select campaign settings",
      description: `For each ad campaign that you create, you can control how much
                    you're willing to spend on clicks and conversions, which networks
                    and geographical locations you want your ads to show on, and more.`,
    },
    {
      label: "Create an ad group",
      description:
        "An ad group contains one or more ads which target a shared set of keywords.",
    },
    {
      label: "Create an ad",
      description: `Try out different ad text to see what brings in the most customers,
                    and learn how to enhance your ads using features like ad extensions.
                    If you run into any problems with your ads, find out how to tell if
                    they're running and how to resolve approval issues.`,
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container>
      {" "}
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Container>
  );
};

export default TaskProgress;
