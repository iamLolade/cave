import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

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
            <Route exact path="/" component={Home}>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
