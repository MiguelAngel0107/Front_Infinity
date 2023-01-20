import Navbar from "../components/navigation/navbar";
import Footer from "../components/navigation/footer";

import { connect } from "react-redux";
import { useEffect } from "react";
import { check_authenticated, load_user, refresh } from "../Redux/actions/auth";

const Layout = (props) => {
  useEffect(() => {
    props.refresh();
    props.check_authenticated();
    props.load_user();
  }, []);
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default connect(null, {
  check_authenticated,
  load_user,
  refresh,
})(Layout);
