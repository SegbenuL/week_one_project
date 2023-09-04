import "./App.css";
import sedan from "./images/icon-sedans.svg";
import suv from "./images/icon-suvs.svg";
import luxury from "./images/icon-luxury.svg";

function App() {
  return (
    <div className="App">
      <cards
        name="SEDANS"
        body="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
      />
    </div>
  );
}

export default App;
