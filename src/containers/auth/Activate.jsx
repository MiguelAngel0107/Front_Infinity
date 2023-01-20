import Layout from "../../layout/layout";
import { Link } from "react-router-dom";
import { activate } from "../../Redux/actions/auth";
import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";

const Activate = ({
    activate,
    loading
}) => {
  const params = useParams();

  const [activated, setActivated] = useState(false);

  const activate_account = () => {
    window.scrollTo(0, 0);
    const token = params.token;
    const uid = params.uid;
    activate(uid, token);
    setActivated(true);
  };

  if (activated && !loading) return <Navigate to="/login" />;

  return (
    <Layout>
      <div class="grid h-screen px-4 bg-white place-content-center dark:bg-gray-900">
        <div class="text-center">
          <h1 class="font-black text-gray-200 text-9xl dark:text-gray-700">
            Email
          </h1>

          <p class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Success
          </p>

          <p class="mt-4 text-gray-500 dark:text-gray-400">
            testtesttesttesttesttest
          </p>

          <buttom
            onClick={activate_account}
            class="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            Activate Account
          </buttom>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = state => ({
    loading: state.Auth.loading
})

export default connect(mapStateToProps,{
    activate
}) (Activate)
