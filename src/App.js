import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./pages.js/Products";
import axios from "axios";
import { requests } from "./api/requests";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages.js/Cart";

function App() {
  const [movies, setMovies] = useState([]);
  const [api, setAPI] = useState(requests.popularRequest);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(api);
      console.log(response.data.results);
      setMovies(response.data.results);
    };
    fetchMovies();
  }, [api]);
  return (
    <div className="App">
      <Header title="Cart Application" cart={cart} />
      <Routes>
        <Route
          index
          path="/"
          element={
            <Products movies={movies} setAPI={setAPI} setCart={setCart} cart = {cart}/>
          }
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
