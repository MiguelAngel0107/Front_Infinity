import { Fragment } from "react";
import { connect } from "react-redux";
import { useEffect } from "react";

function Alerts({ alert }) {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  let claseStyle1 =
    "bg-green-600 px-4 py-3 text-white sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8";
  let claseStyle2 = "";
  let claseStyle3 = "";

  if (alert !== null && alert.alertType === "red") {
    claseStyle1 =
      "bg-red-600 px-4 py-3 text-white sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8";
    claseStyle2 = "";
    claseStyle3 = "";
  }
  const displayAlert = () => {
    if (alert !== null) {
      return (
        <div class={claseStyle1}>
          <p class="text-center font-medium sm:text-left">
            {alert.msg}
            <br class="sm:hidden" />
            ...
          </p>
        </div>
      );
    } else {
      return <Fragment></Fragment>;
    }
  };

  return <Fragment>{displayAlert()}</Fragment>;
}

const mapStateToProps = (state) => ({
  alert: state.Alert.alert,
});

export default connect(mapStateToProps)(Alerts);
