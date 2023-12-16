import { Route, Routes } from "react-router-dom";
import  Home  from "../Pages/Home";
import Carousel1 from "../Pages/Carousel1";
import Carousel from "../Components/Carousel";
import Cities from "../Components/Home/Cities";
import Login from "../Pages/Login";
// import Signup from "../Pages/Signup";
import AdminPage from "../Pages/AdminPage";
import Sec4Days from "../Components/Home/Sec4Days";
import Footer from "../Components/Home/Footer";
import Sec5 from "../Components/Home/Sec5";

export default function  MainRoutes () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carousel1" element={<Carousel1 />} />
      <Route path="/carousel" element={<Carousel />} />
      <Route path="/cities" element={<Cities />} />
      <Route path="/login" element={<Login />} />
      <Route path="/adminpage" element={<AdminPage />} />
      <Route path="/sec4days" element={<Sec4Days />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/sec5" element={<Sec5 />} />
       </Routes>                                                   
  );
};
