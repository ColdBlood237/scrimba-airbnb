import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  let cardElements = data.map((x) => (
    <Card
      key={x.id}
      img={x.coverImg}
      rating={x.stats.rating}
      reviewCount={x.stats.reviewCount}
      location={x.location}
      title={x.title}
      price={x.price}
      openSpots={x.openSpots}
    />
  ));

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cardElements}</section>
    </div>
  );
}

export default App;
