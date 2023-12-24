import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AddProducts from "./components/AddProducts";
import NavBarMenu from "./components/NavBarMenu";
import ProductDetail from "./components/ProductDetail";
import ShowProducts from "./components/ShowProducts";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBarMenu />
        <Routes>
          <Route exact path="/" Component={ShowProducts} />
          <Route exact path="/addProduct" Component={AddProducts} />
          <Route exact path="/:id/" Component={ProductDetail} />
          <Route exact path="/:id/update" Component={UpdateProduct} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
