import { connect } from "react-redux";
import Dashboard from "../review/Dashboard";
import ItemReserve from "../../../components/dashboard/one/itemReserve";
import { Str_a_Int } from "../../../helpers/formatDate";
import { useState, useEffect } from "react";
import { getReserve } from "../../../Redux/actions/appointment";

const DashboardOne = ({ bookings, nameUser, getReserve }) => {
  
  useEffect(() => {
    getReserve()
  }, []);

  let items;
  if (bookings != null && bookings != undefined) {
    items = bookings.bookings;
  } else {
    items = null;
  }
  let name;
  if (nameUser != null && nameUser != undefined) {
    name = nameUser.first_name;
  } else {
    name = null;
  }

  return (
    <Dashboard>
      <section class="text-gray-400 bg-gray-900 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="-my-8 divide-y-2 divide-gray-800">
            {items &&
              items != null &&
              items.map((item) => {
                console.log(item)
                let dateInt = [];
                dateInt = Str_a_Int(item.date);
                return <ItemReserve item={item} name={name} dateInt={dateInt} hour={item.time}/>;
              })}
          </div>
        </div>
      </section>
    </Dashboard>
  );
};

const mapStateToProps = (state) => ({
  bookings: state.Appointment.appointment,
  nameUser: state.Auth.user,
});

export default connect(mapStateToProps, { getReserve })(DashboardOne);
