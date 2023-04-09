import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { ProductList } from "./components/ProductList";
import { ProductDetails } from "./components/ProductDetails";
import { Contact } from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<ProductList />}></Route>
          <Route path="/products/id" element={<ProductDetails />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
