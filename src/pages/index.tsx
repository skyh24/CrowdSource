import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import { Footer } from "../components/Footer";
import { HomeDashboard } from "../components/HomeDashboard";

const Home: NextPage = () => {
  return (
    <Layout>
      <HomeDashboard />
      <Footer />
    </Layout>
  );
};

export default Home;
