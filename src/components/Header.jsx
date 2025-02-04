import { StyledHeader, StyledMobileHeader } from "./styles/Header.styled";
import { useState, useContext } from "react";
import Modal from "./Modal";
import { CartContext } from "../CartContext";
import { h1 } from "motion/react-client";
import CartProduct from "./CartProduct";

export default function Header() {
  const cart = useContext(CartContext);

  const [isOpen, setIsOpen] = useState(false);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const handleBarsBtn = () => {
    setIsMobileNavVisible(true);
  };

  const handleCloseBtn = () => {
    setIsMobileNavVisible(false);
  };

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

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
        <button className="mobile-header__cart-btn" onClick={handleOpen}>
          Cart ({productsCount} Items)
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

          <button className="header__cart-btn" onClick={handleOpen}>
            Cart ({productsCount} Items)
          </button>
          {isOpen && (
            <Modal onClose={handleClose}>
              <h1>Shopping Cart</h1>
              {productsCount > 0 ? (
                <>
                  <p>Items in Cart:</p>
                  {cart.items.map((currentProduct, index) => (
                    <CartProduct
                      id={currentProduct.id}
                      quantity={currentProduct.quantity}
                      key={index}
                    ></CartProduct>
                  ))}

                  <h1>Total: ¥{cart.getTotalCost().toFixed(2)}</h1>
                </>
              ) : (
                <h1>Cart Empty</h1>
              )}
              <hr></hr>
              <button className="modal-purchase-btn">Purchase</button>
            </Modal>
          )}
        </nav>
      </StyledHeader>

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
      </StyledMobileHeader>
    </>
  );
}
