import { StyledHeader, StyledMobileHeader } from "./styles/Header.styled";
import { useState } from "react";

export default function Header() {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const [isCartModalVisible, setIsCartModalVisible] = useState(false);

  const handleBarsBtn = () => {
    setIsMobileNavVisible(true);
  };

  const handleCloseBtn = () => {
    setIsMobileNavVisible(false);
  };

  const toggleCartModal = () => {
    setIsCartModalVisible((prev) => !prev);
  };

  const closeCartModal = () => {
    setIsCartModalVisible(false);
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
            onClick={toggleCartModal}
            rel="noreferrer noopener"
            title="Cart"
            aria-label="Cart link"
            className="header__social"
          >
            <i className="lni lni-cart-2"></i>
          </a>
        </nav>
      </StyledHeader>

      {isCartModalVisible && (
        <div className="cart-modal">
          <div className="cart-modal__content">
            <button onClick={closeCartModal} className="cart-modal__close-btn">
              Close
            </button>
            <h2>Cart</h2>
            <p>Contents for cart, if any</p>
          </div>
        </div>
      )}

      <StyledMobileHeader
        id="mobile-nav"
        style={{ display: isMobileNavVisible ? "flex" : "none" }}
      >
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
          onClick={toggleCartModal}
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
