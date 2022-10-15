import { ThemeButton } from "../../style/buttons";
import { StyledLi } from "./style";

const Product = ({ product, cartProducts, setCartProducts }) => {
  const handleClick = () => {
    !cartProducts.includes(product) &&
      setCartProducts((prev) => [...prev, product]);
  };

  return (
    <StyledLi>
      <div className="imgContainer">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="detailsContainer">
        <h3>{product.name}</h3>
        <span>{product.category}</span>
        <p>R$ {product.price.toFixed(2).replace(".", ",")}</p>
        <ThemeButton
          buttonSize="small"
          buttonColor="green"
          onClick={() => handleClick()}
        >
          Adicionar
        </ThemeButton>
      </div>
    </StyledLi>
  );
};

export default Product;
