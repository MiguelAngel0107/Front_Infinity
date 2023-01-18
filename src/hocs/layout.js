import Navbar from "../components/navigation/navbar";

const Layout = (props) => {
  return (
    <div>
      <Navbar/>
      {props.children}
    </div>
  )
};

export default Layout;
