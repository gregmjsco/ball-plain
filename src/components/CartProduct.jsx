import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../productsStore";
import { StyledCartProduct } from "./styles/CartProduct.styled";

function CartProduct(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  return (
    <StyledCartProduct>
      <h3>{productData.title}</h3>
      <p>{quantity} total</p>
      <p>¥{(quantity * productData.price).toFixed(2)}</p>
      <button onClick={() => cart.deleteFromCart(id)}> Remove</button>
      <hr></hr>
    </StyledCartProduct>
  );
}

export default CartProduct;
