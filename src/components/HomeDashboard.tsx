import styled from "styled-components";
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { TaskCard } from "./TaskCard";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 16px;
  height: 100%;
  flex-wrap: wrap;
  margin-top: 64px;

  & > .tags {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0 48px;

    & > .type-selector {
      width: 150px;
    }
  }

  & .dashboard {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 16px;
    padding: 0 24px;
    width: 100%;
    height: 100%;
  }
`;

export const HomeDashboard = () => {
  const dataDev = [
    {
      name: "DeFi Platform Development",
      description:
        "Seeking blockchain developers with experience in Solidity and Rust to help build an innovative DeFi platform. The platform will support multi-chain asset management, decentralized trading, and smart contract functionality. Developers should have a deep understanding of DeFi protocols and be able to optimize contract security and efficiency.",
      tags: [3, 7],
      author: 1,
    },
    {
      name: "Web3 Social Platform Backend Development",
      description:
        "We are building a decentralized social platform and need developers proficient in Node.js and the Substrate framework to handle backend development. Developers will be responsible for designing and implementing on-chain user data storage, messaging systems, and NFT publishing features, ensuring the platform's high performance and security.",
      tags: [1, 5, 14],
      author: 0,
    },
    {
      name: "Blockchain Security Enhancement",
      description:
        "Looking for experts in blockchain security to audit and enhance the security of our DeFi platform. Experience with smart contract vulnerabilities and security best practices is required.",
      tags: [0, 8, 13],
      author: 2,
    },
    {
      name: "Cross-Chain Integration Specialist",
      description:
        "Seeking a specialist to implement cross-chain functionality in our DeFi platform. Must have experience with interoperability protocols and cross-chain asset transfers.",
      tags: [2, 6, 15],
      author: 1,
    },
    {
      name: "Smart Contract Optimization",
      description:
        "Need a developer to optimize smart contract performance and reduce gas costs. Experience with Solidity and EVM is essential.",
      tags: [4, 9, 11],
      author: 0,
    },
    {
      name: "Decentralized Exchange Development",
      description:
        "Looking for developers to build a decentralized exchange with advanced trading features. Experience with AMM protocols is a plus.",
      tags: [10, 13, 16],
      author: 2,
    },
  ];

  const dataDesign = [
    {
      name: "NFT Marketplace User Interface Design",
      description:
        "We are looking for a UI/UX designer with experience in NFT marketplace design to create a visually appealing and user-friendly interface. The designer should have an appreciation for NFT art, be able to craft a unique brand image, and enhance the user experience for buying and trading.",
      tags: [2, 5, 14],
      author: 0,
    },
    {
      name: "Senior Web3 Interaction Designer",
      description:
        "As a senior Web3 interaction designer, I am looking for a challenging project where I can collaborate with a frontend development team to design seamless and intuitive user interactions. My expertise lies in designing user journeys for decentralized applications (dApps), ensuring that even new users can quickly get started.",
      tags: [0, 7, 12],
      author: 1,
    },
    {
      name: "Crypto Wallet Design",
      description:
        "Seeking a designer to create an intuitive and secure interface for a new crypto wallet. Experience with security features and user onboarding is required.",
      tags: [3, 8, 15],
      author: 2,
    },
    {
      name: "Web3 Branding Specialist",
      description:
        "Looking for a branding specialist to develop a cohesive brand strategy for our Web3 platform. Must have experience with digital branding and community engagement.",
      tags: [1, 6, 11],
      author: 0,
    },
    {
      name: "Decentralized App UI/UX Design",
      description:
        "Need a designer to create a user-friendly interface for a decentralized application. Experience with blockchain technology is a plus.",
      tags: [4, 9, 13],
      author: 1,
    },
    {
      name: "Interactive NFT Gallery Design",
      description:
        "Looking for a designer to create an interactive gallery for showcasing NFTs. Must have experience with 3D design and user engagement strategies.",
      tags: [10, 12, 16],
      author: 2,
    },
  ];

  const dataOp = [
    {
      name: "DAO Community Growth Strategy",
      description:
        "Seeking a marketing expert skilled in Web3 community operations to develop and execute a community growth strategy for a Decentralized Autonomous Organization (DAO). Tasks include planning community events, designing incentive mechanisms, creating and distributing content, and expanding influence through social media. The ideal candidate should have extensive community management experience and be familiar with DAO governance models.",
      tags: [0, 5, 14],
      author: 1,
    },
    {
      name: "Web3 Marketing Strategy Research",
      description:
        "We are a small team researching how to launch and promote new products in the Web3 space. We are looking for like-minded marketing and operations experts to explore and experiment with innovative marketing strategies, including user acquisition, social media management, and partnerships.",
      tags: [2, 7, 13],
      author: 0,
    },
    {
      name: "Blockchain Event Coordinator",
      description:
        "Looking for an event coordinator to organize blockchain conferences and meetups. Experience with event planning and community engagement is required.",
      tags: [1, 6, 15],
      author: 2,
    },
    {
      name: "Social Media Manager for Crypto Projects",
      description:
        "Seeking a social media manager to handle online presence and engagement for our crypto projects. Must have experience with content creation and community building.",
      tags: [3, 8, 12],
      author: 1,
    },
    {
      name: "Partnership Development Specialist",
      description:
        "Need a specialist to develop strategic partnerships in the blockchain industry. Experience with business development and negotiation is essential.",
      tags: [4, 9, 11],
      author: 0,
    },
    {
      name: "Web3 Content Marketing Expert",
      description:
        "Looking for a content marketing expert to create and distribute engaging content for our Web3 platform. Must have experience with SEO and digital marketing.",
      tags: [10, 13, 16],
      author: 2,
    },
  ];

  const dataOther = [
    {
      name: "Web3 Legal Compliance Advisor",
      description:
        "Our project involves cross-border blockchain transactions and asset management, requiring a compliance advisor well-versed in Web3-related laws and regulations. The advisor will provide legal consultation to ensure the project complies with local regulations, especially regarding the legal validity of smart contracts, token issuance, and data privacy.",
      tags: [0, 6, 14],
      author: 1,
    },
    {
      name: "Cross-Disciplinary Web3 Content Creator",
      description:
        "I am a content creator focused on the Web3 space, specializing in writing technical blogs, market analysis, and educational content. I hope to provide high-quality content for an influential Web3 platform, helping the platform attract new users and enhance brand trust.",
      tags: [2, 5, 12],
      author: 0,
    },
    {
      name: "Blockchain Patent Specialist",
      description:
        "Seeking a specialist to handle patent applications and intellectual property rights for blockchain innovations. Must have experience with patent law and technology.",
      tags: [1, 7, 13],
      author: 2,
    },
    {
      name: "Crypto Tax Consultant",
      description:
        "Looking for a tax consultant to advise on cryptocurrency taxation and compliance. Experience with international tax laws is a plus.",
      tags: [3, 8, 15],
      author: 1,
    },
  ];
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <div className="tags">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Development" {...a11yProps(0)} />
            <Tab label="Design & Interaction" {...a11yProps(1)} />
            <Tab label="Marketing & Operations" {...a11yProps(2)} />
            <Tab label="Others" {...a11yProps(3)} />
          </Tabs>
        </Box>
      </div>

      <CustomTabPanel value={value} index={0}>
        <div className="dashboard">
          {dataDev.map((item) => {
            return (
              <TaskCard
                name={item.name}
                description={item.description}
                tags={item.tags}
                author={item.author}
              />
            );
          })}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="dashboard">
          {dataDesign.map((item) => {
            return (
              <TaskCard
                name={item.name}
                description={item.description}
                tags={item.tags}
                author={item.author}
              />
            );
          })}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className="dashboard">
          {dataOp.map((item) => {
            return (
              <TaskCard
                name={item.name}
                description={item.description}
                tags={item.tags}
                author={item.author}
              />
            );
          })}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <div className="dashboard">
          {dataOther.map((item) => {
            return (
              <TaskCard
                name={item.name}
                description={item.description}
                tags={item.tags}
                author={item.author}
              />
            );
          })}
        </div>
      </CustomTabPanel>
    </Container>
  );
};
