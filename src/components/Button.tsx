import styled from "styled-components";

const Container = styled.div`
  width: max-content;
  padding: 8px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 33px;
  top: 257px;
  left: 71px;
  gap: 0px;
  opacity: 0px;
  cursor: pointer;
  background-color: #d9d9d9;

  &:hover {
    background-color: #d0cccc;
  }
  user-select: none;
`;

interface ButtonProps {
  type: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ type, onClick }) => {
  return <Container onClick={onClick}>{type}</Container>;
};
