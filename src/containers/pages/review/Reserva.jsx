import { useEffect, useState } from "react";
import Layout from "../../../layout/layout";
import { Link } from "react-router-dom";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import TimePicker from "rc-time-picker";
import "../../../style/time.css";
import "rc-time-picker/assets/index.css";

import { setReserve } from "../../../Redux/actions/appointment";
import { connect } from "react-redux";
import { Date, Hour } from "../../../helpers/formatDate";

const Reserva = ({ setReserve, user, isAuthenticated }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selected, setSelected] = useState("");
  const [time, setTime] = useState(null);
  const [hour, setHour] = useState(null);

  const disabledHours = () => {
    let hours = [];
    for (let i = 0; i < 24; i++) {
      if (i < 8 || i > 18) {
        hours.push(i);
      }
    }
    return hours;
  };
  const onChange = (time) => {
    setHour(time.format("HH:mm"));
    setTime(time);
  };
  function Save(e) {
    e.preventDefault();
    let date = Date(selected);
    let time = Hour(hour);
    setReserve(user.email, date, time);
  }

  let footer = <p>Please pick a day.</p>;
  if (
    selected &&
    hour != null
  ) {
    footer = (
      <>
        <p>You Date Picked {format(selected, "PP")}</p>
        <p>You Hour Picked {String(hour)}</p>
        {isAuthenticated.isAuthenticated ? (
          <form onSubmit={(e) => Save(e)}>
            <button
              type="submit"
              class="inline-block rounded bg-gray-900 px-8 py-3 text-sm font-medium text-white transition hover:bg-gray-700 focus:outline-none focus:ring active:bg-gray-900"
            >
              Save
            </button>
          </form>
        ) : (
          <Link
            to="/login"
            class="inline-block rounded bg-gray-900 px-8 py-3 text-sm font-medium text-white transition hover:bg-gray-700 focus:outline-none focus:ring active:bg-gray-900"
          >
            Login
          </Link>
        )}
      </>
    );
  }

  return (
    <Layout>
      <div className="dark:bg-gray-900">
        <div className=" bg-white w-80 h-12 text-center mx-auto rounded-2xl">
          <TimePicker
            className="pt-2.5"
            format="HH:mm"
            value={time}
            onChange={onChange}
            disabledHours={disabledHours}
            hideDisabledOptions={true}
          />
        </div>
        <div className=" bg-white w-80 mx-auto rounded-2xl ">
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
  user: state.Auth,
  isAuthenticated: state.Auth,
});

export default connect(mapStateToProps, {
  setReserve,
})(Reserva);
