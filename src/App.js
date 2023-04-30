import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer } from "./components/index";

import "./App.css";

function App() {
  console.log("hello");
  return (
    <div className="App">
      <Header />
      <main>
        <AllRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
