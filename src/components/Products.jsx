import { StyledProducts } from "./styles/Products.styled";
import { motion } from "framer-motion"; // Import Framer Motion

export default function Products() {
  return (
    <StyledProducts>
      <div className="list">
        <motion.div
          className="item"
          whileHover={{ scale: 1.05, opacity: 0.8 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src="/1.png" alt="" width="998" height="666" />
        </motion.div>
        <motion.div
          className="item"
          whileHover={{ scale: 1.05, opacity: 0.8 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src="/2.png" alt="" width="997" height="667" />
        </motion.div>
        <motion.div
          className="item"
          whileHover={{ scale: 1.05, opacity: 0.8 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src="/3.png" alt="" width="997" height="667" />
        </motion.div>
        <motion.div
          className="item"
          whileHover={{ scale: 1.05, opacity: 0.8 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src="/4.png" alt="" width="997" height="667" />
        </motion.div>
        <motion.div
          className="item"
          whileHover={{ scale: 1.05, opacity: 0.8 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src="/5.png" alt="" width="997" height="667" />
        </motion.div>
        <motion.div
          className="item"
          whileHover={{ scale: 1.05, opacity: 0.8 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src="/6.png" alt="" width="997" height="666" />
        </motion.div>
        <motion.div
          className="item"
          whileHover={{ scale: 1.05, opacity: 0.8 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src="/1.png" alt="" width="998" height="666" />
        </motion.div>
        <motion.div
          className="item"
          whileHover={{ scale: 1.05, opacity: 0.8 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src="/2.png" alt="" width="997" height="667" />
        </motion.div>
        <motion.div
          className="item"
          whileHover={{ scale: 1.05, opacity: 0.8 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src="/3.png" alt="" width="997" height="667" />
        </motion.div>
        <motion.div
          className="item"
          whileHover={{ scale: 1.05, opacity: 0.8 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src="/4.png" alt="" width="997" height="667" />
        </motion.div>
      </div>
    </StyledProducts>
  );
}
