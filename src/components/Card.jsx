/* eslint-disable react/prop-types */
import star from "../../public/images/star.png";

export default function Card({
  img,
  rating,
  reviewCount,
  location,
  title,
  price,
  openSpots,
}) {
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img
        className="activity-picture"
        src={`../public/images/${img}`}
        alt="experience"
      />
      <p className="activity-info">
        <img className="star-icon" src={star} alt="star" />
        <span className="rating">{rating} </span>
        <span className="country">
          ({reviewCount}) • {location}
        </span>
      </p>
      <h2 className="activity-title">{title}</h2>
      <p className="activity-price">
        <b>From ${price} / </b>person
      </p>
    </div>
  );
}
