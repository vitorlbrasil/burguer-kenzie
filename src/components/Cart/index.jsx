import CartCard from "../CartCard";
import CartTotal from "../CartTotal";
import { CartContainer } from "./style";

const Cart = ({ cartProducts, setCartProducts }) => {
  return (
    <CartContainer>
      <div className="cartTitle">
        <h3>Carrinho de compras</h3>
      </div>
      {cartProducts.length ? (
        <>
          <ul className="cartList">
            {cartProducts.map((product) => (
              <CartCard
                key={product.id}
                product={product}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
              />
            ))}
          </ul>
          <CartTotal
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
          />
        </>
      ) : (
        <div className="emptyCart">
          <h3>Seu carrinho está vazio</h3>
          <p>Adicione ítens</p>
        </div>
      )}
    </CartContainer>
  );
};

export default Cart;
