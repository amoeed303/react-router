import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { ProductList } from "./components/ProductList";
import { ProductDetails } from "./components/ProductDetails";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  console.log("hello");
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<ProductList />}></Route>
          <Route path="/products/1001" element={<ProductDetails />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </main>
   <Footer/>
    </div>
  );
}

export default App;
