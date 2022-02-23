import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";

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
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/products" component={Products} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
