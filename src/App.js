import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./pages.js/Products";
import axios from "axios";
import { requests } from "./api/requests";
import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [api, setAPI] = useState(requests.popularRequest);
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
      <Header title="Cart Application" />
      <Products movies={movies} setAPI={setAPI} />
      <Footer />
    </div>
  );
}

export default App;
