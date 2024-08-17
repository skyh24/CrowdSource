import Layout from "../components/Layout";
import { Footer } from "../components/Footer";
import TaskProgress from "../components/TaskProgress";

const TaskPage = () => {
  return (
    <Layout>
      <TaskProgress />
      <Footer />
    </Layout>
  );
};

export default TaskPage;
