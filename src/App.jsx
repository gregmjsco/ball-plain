import { Container } from "./components/styles/Container.styled";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global.js";

const theme = {
  colors: {
    header: "#ebfxff",
    body: "#fff",
    footer: "#003333",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Container>
          <h1>Hello World</h1>
          <h2>Hello World</h2>
          <h3>Hello World</h3>
          <p className="muted">
            Duis <a href="#">Lorem laboris</a> sunt duis pariatur do non tempor
            quis sint eu aliquip. Do nisi labore et anim do eiusmod
            reprehenderit et. Ea ea irure id consectetur ea. Lorem sunt pariatur
            occaecat elit adipisicing aute in elit. Amet est excepteur sint
            Lorem exercitation voluptate in.
          </p>
          <p className="text">
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
