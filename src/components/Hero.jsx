import { StyledHero } from "./styles/Hero.styled";

export default function Hero() {
  return (
    <StyledHero>
      <img
        className="hero__img"
        src="../../public/BALogoMockWhite.png"
        alt="Ball Again logo in white"
        width="758"
        height="714"
      />
      <h1 className="hero__title">Ball Again</h1>
    </StyledHero>
  );
}
