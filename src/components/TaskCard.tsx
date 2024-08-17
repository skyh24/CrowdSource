import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Tag } from "./Tag";
import { useRouter } from "next/router";

const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  height: 260px;
  flex-direction: column;
  justify-content: space-between;
  user-select: none;
  cursor: pointer;

  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  & > .content {
    & > .name {
      font-family: "Inter";
      font-size: 18px;
      font-weight: 800;
    }

    & > .description {
      margin-top: 12px;
      max-height: 200px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
    }
  }

  & > .operation {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & > .tags {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    & > .avatar {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

interface TaskCardProps {
  name: string;
  description: string;
  tags: number[];
}

export const TaskCard: React.FC<TaskCardProps> = ({
  name,
  description,
  tags,
}) => {
  const router = useRouter();

  return (
    <Container onClick={() => router.push("task")}>
      <div className="content">
        <div className="name">{name}</div>
        <div className="description">{description}</div>
      </div>

      <div className="operation">
        <div className="tags">
          {tags.map((item, index) => {
            return <Tag index={item} key={index} />;
          })}
        </div>
        <div className="avatar">
          <Avatar src="/avatar/Coooder.jpg" />

          <span>Coooder</span>
        </div>
      </div>
    </Container>
  );
};
