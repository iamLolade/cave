import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Offers from "./pages/Offers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Cave</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/*" element={<About />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/products" element={<Products />} />
            <Route path="/offers" element={<Offers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
