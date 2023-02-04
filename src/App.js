import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Brands from "./components/Brands";
import Home from "./components/Home/Home";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="text-center">
          <NavBar />
          <Home />

          <Brands />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
