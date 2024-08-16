import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  height: 150px;
  flex-direction: column;
  justify-content: space-between;
`;

interface TaskCardProps {
  name: string;
  description: string;
}

export const TaskCard: React.FC<TaskCardProps> = ({ name, description }) => {
  return (
    <Container>
      <div className="name">{name}</div>
      <div className="description">{description}</div>
    </Container>
  );
};
