import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar";
import Footer from "../Pages/Shared/Footer";

const Layout = () => {
  return (
    <div>
      <div className="lg:max-w-6xl  mx-auto ">
        <div className="lg:m-2 m-4">

        <NavBar></NavBar>
        <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
