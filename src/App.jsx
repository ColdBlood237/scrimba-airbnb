import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  let cardElements = data.map((item) => <Card key={item.id} item={item} />);

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cardElements}</section>
    </div>
  );
}

export default App;
