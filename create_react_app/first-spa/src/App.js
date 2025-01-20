import Checkout from "./Checkout";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Main Page</Link>
      <Link to="/product_detail">Product Detail</Link>
      <Link to="/checkout">checkout</Link>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product_detail" element={<ProductDetail />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
