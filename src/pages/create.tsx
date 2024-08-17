import { createGlobalStyle } from "styled-components";
import { Header } from "../components/Header";
import Layout from "../components/Layout";
import { CreateForm } from "../components/CreateForm";

const CreatePage = () => {
  return (
    <Layout>
      <CreateForm />
    </Layout>
  );
};

export default CreatePage;
