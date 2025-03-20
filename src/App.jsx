import { Route, Routes } from "react-router";
import Navigation from "./components/Navigation.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import Product from "./pages/Product.jsx";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <div className="bg-white dark:bg-black container pb-10">
        <Navigation />
        <div className="body-con">
          <Routes>
            <Route index element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:id" element={<Product />} />
          </Routes>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
