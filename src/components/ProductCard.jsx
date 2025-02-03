import { StyledCard } from "./styles/ProductCard.styled";
import { motion } from "framer-motion";
import { CartContext } from "../CartContext";
import { useContext } from "react";

export default function ProductCard(props) {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  console.log(cart.items);

  return (
    <StyledCard>
      <motion.div
        className="item"
        whileHover={{ scale: 1.05, opacity: 0.8 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img
          src={product.source}
          alt={product.title}
          width="997"
          height="667"
        />
        <h3>{product.title}</h3>
        <p>¥{product.price}</p>
        {productQuantity > 0 ? (
          <div className="changeQuantity">
            <button onClick={() => cart.removeOneFromCart(product.id)}>
              -
            </button>
            <p>{productQuantity}</p>
            <button onClick={() => cart.addOneToCart(product.id)}>+</button>
          </div>
        ) : (
          <button onClick={() => cart.addOneToCart(product.id)}>
            Add to Cart
          </button>
        )}
      </motion.div>
    </StyledCard>
  );
}
