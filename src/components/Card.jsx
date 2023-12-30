/* eslint-disable react/prop-types */
import star from "../assets/star.png";

export default function Card({ item }) {
  let badgeText;
  console.log(item);
  if (item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img
        className="activity-picture"
        src={`../../public/images/${item.coverImg}`}
        alt="experience"
      />
      <p className="activity-info">
        <img className="star-icon" src={star} alt="star" />
        <span className="rating">{item.stats.rating} </span>
        <span className="country">
          ({item.stats.reviewCount}) • {item.location}
        </span>
      </p>
      <h2 className="activity-title">{item.title}</h2>
      <p className="activity-price">
        <b>From ${item.price} / </b>person
      </p>
    </div>
  );
}
