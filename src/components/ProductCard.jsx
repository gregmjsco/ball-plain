import { StyledCard } from "./styles/ProductCard.styled";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
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
        <button>Add to Cart</button>
      </motion.div>
    </StyledCard>
  );
}
