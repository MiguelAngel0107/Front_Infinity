import Layout from "../../../layout/layout";
import { FAQ as Faq } from "../../../components/FAQ/FAQ";
import { useEffect } from "react";

const FAQ = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Layout>
      <Faq />
    </Layout>
  );
};

export default FAQ;

