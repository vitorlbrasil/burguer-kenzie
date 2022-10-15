import { useEffect } from "react";
import { useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {
  const baseUrl =
    "https://hamburgueria-kenzie-json-serve.herokuapp.com/products";
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((res) => {
        setAllProducts(res);
        setFilteredProducts(res);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <Header
        allProducts={allProducts}
        setFilteredProducts={setFilteredProducts}
      />
      <div className="wrapper">
        <ProductList
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
          filteredProducts={filteredProducts}
        />
        <Cart
          filteredProducts={filteredProducts}
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
        />
      </div>
    </div>
  );
}

export default App;
