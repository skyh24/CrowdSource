import { createGlobalStyle } from "styled-components";
import { Header } from "../components/Header";
import { CreateForm } from "../components/CreateForm";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y:hidden;
    background: linear-gradient(to bottom, #e0e7ff, #f8fafc);
  }

  #__next {
    height: 100%;
  }
`;

const CreatePage = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <CreateForm />
    </div>
  );
};

export default CreatePage;
