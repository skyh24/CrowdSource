import Layout from "../components/Layout";
import { Footer } from "../components/Footer";
import { TaskDetail } from "../components/TaskDetail";

const TaskPage = () => {
  return (
    <Layout>
      <TaskDetail />
      <Footer />
    </Layout>
  );
};

export default TaskPage;
