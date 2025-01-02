import { StyledProducts } from "./styles/Products.styled";
import { motion } from "framer-motion"; // Import Framer Motion
import { productsArray } from "../productsStore";

export default function Products() {
  return (
    <StyledProducts>
      <div className="list">
        {productsArray.map((product) => (
          <motion.div
            key={product.id}
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
          </motion.div>
        ))}
      </div>
    </StyledProducts>
  );
}
