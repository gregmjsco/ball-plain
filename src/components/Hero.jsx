import { StyledHero } from "./styles/Hero.styled";

import heroPhoto from "/BALogoMockWhite.png";

export default function Hero() {
  return (
    <StyledHero className="hero">
      <img
        className="hero__img"
        src={heroPhoto}
        alt="Ball Again logo in white"
        width="758"
        height="714"
      />
      <h1 className="hero__title">Ball, Again</h1>
    </StyledHero>
  );
}
