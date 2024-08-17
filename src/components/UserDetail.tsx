import { Avatar, Divider } from "@mui/material";
import styled from "styled-components";
import MarkdownViewer from "./MarkdownViewer";
import { Tag } from "./Tag";

const Container = styled.div`
  display: flex;
  margin-top: 100px;
  padding: 48px;
  height: 840px;

  & > .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    border-right: 2px solid black;
    width: 35%;
    padding: 0 24px;

    & > .left-intro {
      margin-top: 24px;
      width: 70%;
      text-align: center;
    }

    & > .tags {
      display: flex;
      gap: 6px;
      margin-top: 24px;
    }
  }

  & > .right {
    display: flex;
    flex-direction: column;
    padding: 0 24px;

    & > .title {
      font-size: 20px;
      font-weight: 700;
      margin-top: 8px;
    }
  }
`;

export const UserDetail = () => {
  return (
    <Container>
      <div className="left">
        <Avatar src="/avatar/Coooder.jpg" sx={{ width: 108, height: 108 }} />
        <h1>Emily Chen</h1>
        <h3>Designer</h3>
        <div>被推荐次数 12</div>
        <div className="left-intro">
          I am a senior designer specializing in brand and user experience
          design with over 5 years of industry experience.
        </div>

        <div className="tags">
          <Tag index={17} />
          <Tag index={18} />
          <Tag index={19} />
        </div>
      </div>
      <div className="right">
        <div className="title">Skill Tags:</div>

        <MarkdownViewer
          content={`- Photoshop, Illustrator, Figma, Sketch, InDesign
- **Brand Design:** Brand Identity Design, Logo Design, Brand Guideline Creation
- **Visual Design:** User Interface Design, Digital Illustration, Animation Effects
- **Print Design:** Promotional Posters, Brochures, Business Cards`}
        />
        <Divider />

        <div className="title">Project Experience:</div>

        <MarkdownViewer
          content={`- **Web3 Community Project Poster Design:** Designed marketing posters and social media promotional materials for multiple Web3 projects, helping attract investment and increase community engagement.
- **Blockchain Education Platform:** Responsible for designing the entire UI for the education platform and creating a series of promotional visuals, helping the platform achieve growth from 0 to 1.
- **NFT Art Exhibition Planning:** Served as the chief designer for an NFT art exhibition, designing the visual identity, promotional posters, and exhibition layout, receiving widespread acclaim.`}
        />
        <Divider />

        <div className="title">Project Duration:</div>

        <MarkdownViewer
          content={`I can dedicate 10-15 hours per week to design work, with an expected completion of the poster design within 2 weeks.`}
        />
        <Divider />

        <div className="title">Collaboration Method: </div>

        <MarkdownViewer
          content={`Fully remote, with regular online communication to discuss project progress. I prefer to be compensated in project tokens, USD, or a combination of both.`}
        />
        <Divider />

        <div className="title">Contact Information: </div>

        <MarkdownViewer
          content={`- **Telegram ID:** @emily_designs
- **Email:** emily.chen.designs@example.com`}
        />
        <Divider />

        <div className="title">Additional Notes: </div>

        <MarkdownViewer
          content={`- **Existing Resources:** I can provide samples of similar projects to give you a better understanding of my design style and capabilities.
- **Other Notes:** I have a deep interest in Web3 and blockchain and hope to collaborate with like-minded teams in this project.`}
        />
        <Divider />
      </div>
    </Container>
  );
};
