import { StyledProducts } from "./styles/Products.styled";
import { productsArray } from "../productsStore";
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <StyledProducts>
      <h1 className="title">The starting lineup</h1>
      <div className="list">
        {productsArray.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            title={product.title}
            source={product.source}
          />
        ))}
      </div>
    </StyledProducts>
  );
}
