import styled from "styled-components";
import MarkdownViewer from "./MarkdownViewer";
import { Avatar, Divider } from "@mui/material";
import { Tag } from "./Tag";
import { ArrowBackIos } from "@mui/icons-material";
import { useRouter } from "next/router";
import { TaskButtons } from "./TaskButtons";

const Container = styled.div`
  margin-top: 100px;
  padding: 0 300px;

  & > .name {
    display: flex;
    align-items: center;
    gap: 12px;

    & > span {
      font-size: 28px;
      font-weight: 600;
    }

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

  & > .info {
    height: 160px;
    margin-top: 36px;

    & > .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      & > span {
        font-size: 20px;
        font-weight: 500;
      }

      & > .avatar {
        display: flex;
        align-items: center;
        gap: 12px;
        cursor: pointer;

        & > span {
          font-size: 24px;
          font-weight: 600;
        }
      }
    }

    & > .tags {
      display: flex;
      flex-direction: row;
      gap: 6px;
      width: 85%;
      margin-top: 24px;
    }
  }

  & > .title {
    font-size: 20px;
    font-weight: 700;
    margin-top: 12px;
  }
`;

export const TaskDetail = () => {
  const tagsList = [1, 14, 15];

  const router = useRouter();

  return (
    <Container>
      <div className="name">
        <div className="icon" onClick={() => router.back()}>
          <ArrowBackIos />
        </div>
        <span>Web3 Innovation Conference 2024 - Operational Poster Design</span>
      </div>

      <div className="info">
        <div className="header">
          <div className="avatar" onClick={() => router.push("mine")}>
            <Avatar src="/avatar/Ming.jpg" sx={{ width: 72, height: 72 }} />
            <span>Ming</span>
          </div>

          <span>2024.8.17 在线</span>
        </div>
        <div className="tags">
          {tagsList.map((item) => {
            return <Tag index={item} />;
          })}
        </div>
      </div>

      <Divider />

      <div className="title">Project Description:</div>

      <MarkdownViewer
        content={`We are organizing the "Web3 Innovation Conference 2024," a major event
        focused on the latest developments in blockchain technology,
        decentralized finance (DeFi), and the future of Web3. We need an
        eye-catching and informative operational poster to promote the event.
        The poster will be used both online and offline, requiring
        high-resolution graphics and flexible formatting. The design should
        reflect the cutting-edge nature of Web3 technology while maintaining a
        professional and engaging appearance.`}
      />
      <Divider />
      <Divider />

      <div className="title">Deliverables:</div>
      <MarkdownViewer
        content={`- **Main Poster**:
     - **Size**: A1 (594mm x 841mm) for print
    - **Resolution**: 300 DPI for print
    - **File Formats**:
        - Print: PDF, CMYK color mode
        - Web: JPEG/PNG, RGB color mode
- **Social Media Versions**:
    - **Instagram**: 1080 x 1080 px
    - **Twitter**: 1600 x 900 px
    - **Facebook**: 1200 x 628 px
- **Editable Source Files**: AI/PSD files for future modifications
- **Font Files**: If any custom fonts are used
- **Color Palette & Typography Guide**`}
      />
      <Divider />

      <div className="title">Content Requirements:</div>
      <MarkdownViewer
        content={`- **Title**: "Web3 Innovation Conference 2024"
- **Date**: December 10-12, 2024
- **Venue**: Blockchain Expo Center, New York
- **Key Speakers**: List of prominent speakers (to be provided)
- **Event Highlights**: Panels, workshops, networking sessions (brief bullet points)
- **Call to Action**: "Register Now at [Event Website URL]"
- **Sponsors**: Logos of event sponsors (to be provided)
- **Contact Information**: Event hotline and email for inquiries
- **QR Code**: Linking to the event registration page (QR code to be provided)
- **Visual Theme**: Futuristic and tech-oriented, with a focus on blockchain and innovation`}
      />
      <Divider />

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

      <div className="title">Feedback Rounds:</div>
      <MarkdownViewer
        content={`- **Round 1**: After initial concept submission
- **Round 2**: After first draft submission
- **Final Approval**: Before October 1, 2024`}
      />
      <Divider />

      <div className="title">Communication Channels:</div>
      <MarkdownViewer
        content={`- **Project Management Tool**: Asana for task tracking and feedback
- **Communication**: Slack for real-time updates, Zoom for meetings`}
      />
      <Divider />

      <div className="title">Budget:</div>
      <MarkdownViewer
        content={`- **$1,500 - $2,000 depending on the quality and speed of delivery**`}
      />
      <Divider />

      <div className="title">Special Instructions:</div>
      <MarkdownViewer
        content={`- Ensure the poster is scalable for both large print formats and small social media graphics without losing quality or legibility.
- Use provided brand assets such as logos and color codes strictly according to brand guidelines.
- The poster should be versatile enough to be used across various mediums, from printed banners to digital ads.`}
      />
      <Divider />

      <div className="title">Contact Person:</div>
      <MarkdownViewer
        content={`- **Name**: [Project Manager Name]
- **Email**: [PM's Email]
- **Phone**: [PM's Phone Number]`}
      />
      <Divider />
      <TaskButtons />
    </Container>
  );
};
