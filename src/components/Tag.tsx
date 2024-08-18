import styled from "styled-components";

const Container = styled.div<{ $color: string }>`
  width: max-content;
  flex-wrap: wrap;
  padding: 0 12px;
  height: 28px;
  display: flex;
  align-items: center;
  border-radius: 14px;
  background-color: ${({ $color }) => $color};
`;

interface TagProps {
  index: number;
}

export const Tag: React.FC<TagProps> = ({ index }) => {
  const tagList = [
    "Seed Funding",
    "Series A Funding",
    "Crowdfunding",
    "Concept",
    "Prototype Dev",
    "MVP Completion",
    "Beta",
    "Launched",
    "One Week",
    "Two Weeks",
    "One Month",
    "Two Months",
    "Token",
    "Token + USD",
    "USD",
    "Multi-Recommend",
    "Remote",
    "PUBLIC GOOD",
    "UI",
    "FULL TIME",
  ] as string[];

  let color = "#E2C6EE"; // Default color

  switch (tagList[index]) {
    case "Seed Funding":
    case "Series A Funding":
    case "Successful Crowdfunding":
    case "Concept Stage":
      color = "#9ca2a3";
      break;
    case "Prototype Development":
    case "MVP Completion":
    case "Public Beta":
    case "PUBLIC GOOD":
    case "Official Launch":
      color = "#E2C6EE";
      break;

    case "Within One Week":
    case "Within Two Weeks":
    case "One Month":
    case "Two Months":
    case "UI":
      color = "#ECF0A6";
      break;
    case "Token":
    case "Token + USD":
    case "USD":
    case "FULL TIME":
      color = "#A8DDDD";
      break;
    case "Multiple Recommendations":
    case "Remote":
      color = "#C4CDEC";
      break;
    default:
      color = "#E2C6EE"; // Fallback color
  }

  return <Container $color={color}>{tagList[index]}</Container>;
};
