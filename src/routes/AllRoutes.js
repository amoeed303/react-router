import { Routes, Route } from "react-router-dom";
import {
  Home,
  ProductList,
  ProductDetails,
  Contact,
  ContactPk,
  PageNotFound,
} from "../pages/index";
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
        <Route path="/contact" element={<Contact />}>
          <Route path="pk" element={<ContactPk />} />
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
};
