import styled from "styled-components";
import { Button } from "./Button";
import { useRouter } from "next/router";

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 24px;
  margin-bottom: 60px;
  gap: 24px;
`;

export const TaskButtons = () => {
  const router = useRouter();

  return (
    <Container>
      <Button
        type={"Participate"}
        onClick={() => {
          router.push("progress");
        }}
      />
      <Button type={"Save"} onClick={() => {}} />
      <Button type={"Recommend"} onClick={() => {}} />
    </Container>
  );
};
