import { lazy, Suspense } from "react";
import Navigation from "./components/navigation/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./pages/cart/CartPage";
import Home from "./pages/home/Home";
// import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Payment from "./pages/Payment/Payment";
import Auth from "./pages/auth/auth";
import AuthCheck from "./pages/auth/AuthPages/AuthCheck";

const ProductDetails = lazy(() =>
  import("./pages/ProductDetails/ProductDetails")
);

const Dashboard = lazy(() => {
  import("./pages/Dashboard/Dashboard");
});

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthCheck />
        <Navigation />
        <div>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              <Route path="/auth/login" element={<Auth />} />
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/products/:productId" element={<ProductDetails />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
