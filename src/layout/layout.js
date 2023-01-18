import Navbar from "../components/navigation/navbar";
import Footer from "../components/navigation/footer"

const Layout = (props) => {
  return (
    <div>
      <Navbar/>
        {props.children}
      <Footer/>
    </div>
  )
};

export default Layout;
