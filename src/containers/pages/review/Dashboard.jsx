import Layout from "../../../layout/layout";
import SideVar from "../../../components/dashboard/sidebar";
import Header from "../../../components/dashboard/header"
import SubMenu from "../../../components/dashboard/subMenu";
import { connect } from "react-redux";
import { check_authenticated, load_user, refresh } from "../../../Redux/actions/auth";
import { getReserve } from "../../../Redux/actions/appointment";
import { useEffect } from "react";

const Dashboard = (props) => {
  useEffect(() => {
    window.scroll(0, 0);
    props.refresh();
    props.check_authenticated();
    props.load_user();
    props.getReserve();
  }, []);

  return (
    <div className="bg-gray-900">
      <Header />
      <SubMenu />

      
    </div>
  );
};

const mapStateToProps = (state) => ({
    bookings: state.Appointment.appointment
});

export default connect(mapStateToProps, {
  getReserve,
  check_authenticated,
  load_user,
  refresh,
})(Dashboard);
