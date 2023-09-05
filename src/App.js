import "./App.css";
import Cards from "./components/Cards";
import sedan from "./images/icon-sedans.svg";
import suv from "./images/icon-suvs.svg";
import luxury from "./images/icon-luxury.svg";

function App() {
  return (
    <div className="App">
      <div className="sedan">
        <Cards
          imgicons={sedan}
          name="SEDAN"
          body="Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip."
          color="orange"
          link="Learn More"
        />
      </div>
      <div className="suv">
        <Cards
          imgicons={suv}
          name="SUV"
          body="Take an SUV for its spacious interior, power, and versatility.
        Perfect for your next family vacation and off-road adventures."
          color="light"
          link="Learn More"
        />
      </div>
      <div className="luxury">
        <Cards
          imgicons={luxury}
          name="LUXURY"
          body="Cruise in the best car brands without the bloated prices. Enjoy the
        enhanced comfort of a luxury rental and arrive in style."
          color="dark"
          link="Learn More"
        />
      </div>
    </div>
  );
}

export default App;
