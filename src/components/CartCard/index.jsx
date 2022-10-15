import { StyledLi } from "./style";

const CartCard = ({ product, cartProducts, setCartProducts }) => {
  const handleClick = () => {
    const filtered = cartProducts.filter((el) => el !== product);
    setCartProducts(filtered);
  };

  return (
    <StyledLi>
      <div className="group">
        <div className="imgDiv">
          <img src={product.img} alt={product.name} />
        </div>
        <div className="detailsDiv">
          <h3>{product.name}</h3>
          <span>{product.category}</span>
        </div>
      </div>
      <div className="btnDiv">
        <span onClick={() => handleClick()}>Remover</span>
      </div>
    </StyledLi>
  );
};

export default CartCard;
