import { Container } from "./components/styles/Container.styled";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global.js";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Products from "./components/Products.jsx";
import Footer from "./components/Footer.jsx";
import Banner from "./components/Banner.jsx";
import Accordian from "./components/Accordian.jsx";

const theme = {
  colors: {
    header: "#ebfxff",
    body: "#fff",
    footer: "#003333",

    brandHue: 222,
    brandSaturation: 67,
    brandLightness: 59,
  },

  variables: {
    "--brand--hex": "hsl(222, 67%, 59%)",
    "--brand-hue": "222",
    "--brand-saturation": "67%",
    "--brand-lightness": "59%",
    "--brand-light":
      "hsl(var(--brand-hue) var(--brand-saturation) var(--brand-lightness))",

    "--brand-dark":
      "hsl(var(--brand-hue) calc(var(--brand-saturation) / 2) calc(var(--brand-lightness) / 1.5))",
  },

  sizes: {
    xxs: "0.5rem",
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    twoxl: "1.5rem",
    threexl: "1.875rem",
    fourxl: "2.25rem",
    fivexl: "3rem",
    sixxl: "3.75rem",
    sevenxl: "4.5rem",
    eightxl: "6rem",
    ninexl: "8rem",
    tenxl: "10rem",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Container>
          <Header />
          <Hero />
          <Products />
          <Banner />
          <Accordian />
          <Footer />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
