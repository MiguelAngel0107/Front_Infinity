import { useEffect, useState } from "react";
import Layout from "../../../layout/layout";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import { setReserve } from "../../../Redux/actions/appointment";
import { connect } from "react-redux";
import { Date } from "../../../helpers/formatDate";

const Reserva = ({ setReserve, user }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selected, setSelected] = useState("");

  function Save(e) {
    e.preventDefault();
    let date = Date(selected);
    setReserve(user.email, date, 10);
  }

  let footer = <p>Please pick a day.</p>;
  if (selected && user.email) {
    footer = (
      <>
        <p>You picked {format(selected, "PP")}.</p>
        <form onSubmit={(e) => Save(e)}>
          <button
            type="submit"
            class="inline-block rounded bg-gray-900 px-8 py-3 text-sm font-medium text-white transition hover:bg-gray-700 focus:outline-none focus:ring active:bg-gray-900"
          >
            Save
          </button>
        </form>
      </>
    );
  }

  return (
    <Layout>
      <div className="dark:bg-gray-900">
        <h1 className="text-gray-900">test</h1>
        <div className=" bg-white w-80 mx-auto rounded-2xl">
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            footer={footer}
          />
        </div>
        <h1 className="text-gray-900">test</h1>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  user: state.Auth.user,
});

export default connect(mapStateToProps, {
  setReserve,
})(Reserva);
