import { StyledBanner } from "./styles/Banner.styled";
import { useRef } from "react";

export default function Banner() {
  const sliderRef = useRef(null);
  const nextBtnRef = useRef(null);
  const prevBtnRef = useRef(null);

  const handleNext = () => {
    console.log("Next button clicked");
    if (sliderRef.current) {
      const firstImage = sliderRef.current.querySelector("img:first-child");
      sliderRef.current.append(firstImage);
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      const lastImage = sliderRef.current.querySelector("img:last-child");
      sliderRef.current.prepend(lastImage);
    }
  };

  return (
    <StyledBanner>
      <div className="slider" ref={sliderRef}>
        <img src="/1.png" alt="" width="998" height="666" />
        <img src="/2.png" alt="" width="997" height="667" />
        <img src="/3.png" alt="" width="997" height="667" />
      </div>
      <div className="arrows">
        <a
          className="previous round"
          id="prev"
          onClick={handlePrev}
          ref={prevBtnRef}
        >
          {"<"}
        </a>
        <a
          className="next round"
          id="next"
          onClick={handleNext}
          ref={nextBtnRef}
        >
          {">"}
        </a>
      </div>
    </StyledBanner>
  );
}
