import { Container } from "./components/styles/Container.styled";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global.js";
import Header from "./components/Header.jsx";

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
          <h1>Hello World</h1>
          <h2>Hello World</h2>
          <h3>Hello World</h3>
          <p className="muted section">
            Duis <a href="#">Lorem laboris</a> sunt duis pariatur do non tempor
            quis sint eu aliquip. Do nisi labore et anim do eiusmod
            reprehenderit et. Ea ea irure id consectetur ea. Lorem sunt pariatur
            occaecat elit adipisicing aute in elit. Amet est excepteur sint
            Lorem exercitation voluptate in.
          </p>
          <p className="text section">
            Duis <a href="#">Lorem laboris</a> sunt duis pariatur do non tempor
            quis sint eu aliquip. Do nisi labore et anim do eiusmod
            reprehenderit et. Ea ea irure id consectetur ea. Lorem sunt pariatur
            occaecat elit adipisicing aute in elit. Amet est excepteur sint
            Lorem exercitation voluptate in.
          </p>
          <button>Hello World</button>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
