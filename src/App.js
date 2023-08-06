import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./pages.js/Products";

function App() {
  return (
    <div className="App">
      <Header title="Cart Application" />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
