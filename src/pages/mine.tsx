import TaskProgress from "../components/TaskProgress";
import Layout from "../components/Layout";
import { Footer } from "../components/Footer";
import { UserDetail } from "../components/UserDetail";

const MinePage = () => {
  return (
    <Layout>
      <UserDetail />
      <Footer />
    </Layout>
  );
};

export default MinePage;
