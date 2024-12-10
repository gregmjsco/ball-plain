import { StyledBanner } from "./styles/Banner.styled";
import { useEffect, useRef } from "react";

export default function Banner() {
  const sliderRef = useRef(null);

  useEffect(() => {
    let nextBtn = document.getElementById("next");

    if (nextBtn) {
      nextBtn.addEventListener("click", handleNext);
    }

    return () => {
      if (nextBtn) {
        nextBtn.removeEventListener("click", handleNext);
      }
    };
  }, []);

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.append(
        sliderRef.current.querySelector("img:first-child")
      );
    }
  };

  return (
    <StyledBanner>
      <div className="slider">
        <img src="/1.png" alt="" width="998" height="666" />
        <img src="/2.png" alt="" width="997" height="667" />
        <img src="/3.png" alt="" width="997" height="667" />
      </div>
      <div className="arrows">
        <button id="prev">{"<"}</button>
        <button id="next" onClick={handleNext}>
          {">"}
        </button>
      </div>
    </StyledBanner>
  );
}
