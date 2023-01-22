import { useEffect } from "react";
import Layout from "../../../layout/layout";
import Banner from "../../../components/home/banner";
import Section from "../../../components/home/section";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Banner />
      <Section />
    </Layout>
  );
};

export default Home;
