import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useParams,
} from "react-router-dom";
import SellerPriceDetail from "../Pages/SellerPriceDetail/Seller.jsx"
import SellerPropertyDetail from "../Pages/SellerPropertyDetail/Seller.jsx";
import SellerPropertyFeature from "../Pages/SellerPropertyFeature/Seller.jsx";
import SellerPropertyLocation from "../Pages/SellerPropertyLocation/Seller.jsx";
import SellerPropertyPhoto from "../Pages/SellerPropertyPhoto/Seller.jsx";
import SellerPropertyPhotoOverFlow from "../Pages/SellerPropertyPhotoOverFlow/Seller.jsx";
import FinalPage from "../Pages/FinalPage/FinalPage.jsx"
import Preview from "../Pages/Preview/Preview.jsx"
import HomeInfo from "../Pages/HomeInfo/Home.jsx"
import HomeOtp from "../Pages/HomeOtp/Home.jsx"


function AllRoute() {
  
  return (
    <Routes>
      <Route path="/" element={<HomeInfo />}></Route>
      <Route path="/otp" element={<HomeOtp />}></Route>

      <Route path="/SellerPriceDetail" element={<SellerPriceDetail />}></Route>
      <Route
        path="/SellerPropertyDetail"
        element={<SellerPropertyDetail />}
      ></Route>
      <Route
        path="/SellerPropertyFeature"
        element={<SellerPropertyFeature />}
      ></Route>
      <Route
        path="/SellerPropertyLocation"
        element={<SellerPropertyLocation />}
      ></Route>
      <Route
        path="/SellerPropertyPhoto"
        element={<SellerPropertyPhoto />}
      ></Route>
      <Route
        path="/SellerPropertyPhotoOverFlow"
        element={<SellerPropertyPhotoOverFlow />}
      ></Route>
      <Route path="/FinalPage" element={<FinalPage />}></Route>
      <Route path="/Preview" element={<Preview />}></Route>
    </Routes>
  );
}

export default AllRoute
