import airbnb from "../assets/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav>
      <img className="nav-logo" src={airbnb} alt="airbnb logo" />
    </nav>
  );
}
