import grid from "../assets/photo-grid.png";

export default function Hero() {
  return (
    <section className="hero">
      <img className="hero-photo" src={grid} alt="various pictures in a grid" />
      <h1 className="hero-title">Online Experiences</h1>
      <p className="hero-text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
