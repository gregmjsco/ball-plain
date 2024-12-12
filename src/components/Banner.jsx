import { StyledBanner } from "./styles/Banner.styled";
import { useEffect, useRef } from "react";

export default function Banner() {
  const sliderRef = useRef(null);
  const nextBtnRef = useRef(null);

  //   useEffect(() => {
  //     let nextBtn = document.getElementById("next");
  //     let sliderRef = document.getElementById("slider");

  //     if (nextBtn) {
  //       nextBtn.addEventListener("click", handleNext);
  //     }

  //     return () => {
  //       if (nextBtn) {
  //         nextBtn.removeEventListener("click", handleNext);
  //       }
  //     };
  //   }, []);

  const handleNext = () => {
    console.log("Next button clicked");
    if (sliderRef.current) {
      const firstImage = sliderRef.current.querySelector("img:first-child");
      console.log("First image:", firstImage);
      sliderRef.current.appendChild(firstImage);
      console.log("Slider children:", sliderRef.current.children);
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
        <button id="next" onClick={handleNext} ref={nextBtnRef}>
          {">"}
        </button>
      </div>
    </StyledBanner>
  );
}
