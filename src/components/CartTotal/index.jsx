import { ThemeButton } from "../../style/buttons";
import { StyledDiv } from "./style";

const CartTotal = ({ cartProducts, setCartProducts }) => {
  return (
    <StyledDiv>
      <div className="priceWrapper">
        <p className="totalTitle">Total</p>
        <p className="price">
          R${" "}
          {cartProducts
            .reduce((a, c) => a + c.price, 0)
            .toFixed(2)
            .replace(".", ",")}
        </p>
      </div>
      <ThemeButton
        buttonSize="medium"
        buttonColor="grey"
        onClick={() => setCartProducts([])}
      >
        Remover todos
      </ThemeButton>
    </StyledDiv>
  );
};

export default CartTotal;
