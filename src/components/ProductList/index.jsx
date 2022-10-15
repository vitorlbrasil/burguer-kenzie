import Product from "../Product";
import { StyledUl } from "./style";

const ProductList = ({ filteredProducts, cartProducts, setCartProducts }) => {
  return (
    <StyledUl>
      {filteredProducts.map((product) => (
        <Product
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
          key={product.id}
          product={product}
        />
      ))}
    </StyledUl>
  );
};

export default ProductList;
