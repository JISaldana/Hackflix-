import { Rating } from "react-simple-star-rating";
export default function RatingFilter() {
  console.log("RatingFilter component rendered");
  return (
    <div className="rating-filter">
      <label htmlFor="rating">Filter by Rating:</label>
      <Rating></Rating>
      </div>
  );
}