import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav>
          <h1>Cave</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
     );
}
 
export default Navbar;