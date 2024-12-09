import { StyledBanner } from "./styles/Banner.styled";

export default function Banner() {
  return (
    <StyledBanner>
      <div className="slider">
        <img src="/1.png" alt="" width="998" height="666" />
        <img src="/2.png" alt="" width="997" height="667" />
        <img src="/3.png" alt="" width="997" height="667" />
      </div>
    </StyledBanner>
  );
}
