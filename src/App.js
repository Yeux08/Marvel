import "./assets/css/App.css";
import As from "./componentes/Asa";
import Navbar from "./componentes/Navbar";
import Cocomp from "./componentes/Cocom";
import Int from "./componentes/Intro";
import Slider from "./componentes/Slider/Slider";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <div className="card mb-3 cont-1" >
        <div className="row g-0">
          <div className="col-md-3">

          <Int />

          </div>
          <div className="col-md-9">
            <div className="card-body">
              <As />
              <br></br>
              <Cocomp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
