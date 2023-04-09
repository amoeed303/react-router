import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { ProductList } from "./components/ProductList";
import { ProductDetails } from "./components/ProductDetails";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
