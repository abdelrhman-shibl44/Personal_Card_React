import { Info } from "./components/Info";
import { About } from "./components/About";
import { Interest } from "./components/Interests";
import { Footer } from "./components/Footer";
import { Container } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Container className="container d-flex justify-content-center align-items-center">
        <div className="row">
          <Info />
          <About />
          <Interest />
          <Footer />
        </div>
      </Container >
    </div >
  );
}

export default App;
