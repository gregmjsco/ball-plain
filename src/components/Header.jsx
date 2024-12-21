import { StyledHeader, StyledMobileHeader } from "./styles/Header.styled";

export default function Header() {
  const barsBtn = document.querySelector("#bars-btn");
  const mobileNav = document.querySelector("#mobile-nav");

  const handleBarsBtn = () => {
    mobileNav.style.display = "flex";
  };

  const handleCloseBtn = () => {
    mobileNav.style.display = "none";
  };

  return (
    <>
      <StyledHeader>
        {/* Mobile Menu */}
        <img
          src="../../public/BALogoMockWhite.png"
          alt="Ball Again logo in white"
          width="758"
          height="714"
          className="header__logo"
        />
        <button
          onClick={handleBarsBtn}
          id="bars-btn"
          className="header__bars"
          aria-label="menu button"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <nav className="header__menu">
          <a
            href="https://x.com"
            target="blank"
            rel="noreferrer noopener"
            title="twitter"
            aria-label="Twitter/X link"
            className="header__social"
          >
            <i aria-hidden="true" className="lni lni-x"></i>
          </a>
          <a
            href="https://instagram.com"
            target="blank"
            rel="noreferrer noopener"
            title="Instagram"
            aria-label="Instagram link"
            className="header__social"
          >
            <i aria-hidden="true" className="lni lni-instagram"></i>
          </a>
          <div className="header__separator"></div>
          <a
            href="#"
            target="blank"
            rel="noreferrer noopener"
            title="Cart"
            aria-label="Cart link"
            className="header__social"
          >
            <i className="lni lni-cart-2"></i>
          </a>
        </nav>
      </StyledHeader>
      <StyledMobileHeader id="mobile-nav">
        <button
          id="close-btn"
          className="mobile-nav__close-btn"
          onClick={handleCloseBtn}
        >
          Close
        </button>
        <img
          src="../../public/BALogoMockWhite.png"
          alt="Ball Again logo in white"
          width="758"
          height="714"
          className="mobile-nav__logo"
        />
        <div className="mobile-nav__social-container">
          <a
            href="https://x.com"
            target="blank"
            rel="noreferrer noopener"
            title="twitter"
            aria-label="Twitter/X link"
            className="mobile-nav__social"
          >
            <i aria-hidden="true" className="lni lni-x"></i>
          </a>
          <a
            href="https://instagram.com"
            target="blank"
            rel="noreferrer noopener"
            title="Instagram"
            aria-label="Instagram link"
            className="mobile-nav__social"
          >
            <i aria-hidden="true" className="lni lni-instagram"></i>
          </a>
        </div>
        <div className="mobile-nav__separator"></div>
        <a
          href="#"
          target="blank"
          rel="noreferrer noopener"
          title="Cart"
          aria-label="Cart link"
          className="mobile-nav__social"
        >
          <i className="lni lni-cart-2"></i>
        </a>
      </StyledMobileHeader>
    </>
  );
}
