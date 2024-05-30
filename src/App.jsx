import { Outlet } from "react-router-dom";
import NavBar from "./component/NavBar";
import Hero from "./component/Hero";
import HomeCard from "./component/HomeCard";
import JobsListings from "./component/JobsListings";
import ViewAllJobs from "./component/ViewAllJobs";
import { ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.css'


const App = () => {
 
  return (
    <>
     <NavBar />
     <Outlet />
     <ToastContainer/>
    </>
  )

}

export default App