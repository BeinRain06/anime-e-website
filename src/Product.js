import React from "react";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { useStateValue } from "./StateProvider";
import "./Product.css";

function Product({
  id,
  title,
  image,
  report,
  rating,
  price,
  released,
  studio,
}) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      anime: {
        id: id,
        title: title,
        image: image,
        report: report,
        rating: rating,
        price: price,
        released: released,
        studio: studio,
      },
    });
  };
  return (
    <li className="anime_manga">
      <div className="studio">
        <img src={image} className="anime_img" alt="studio missing!" />
        <span className="studio_name">{studio} </span>
        <span className="released_year">{released}</span>
      </div>
      <div className="record">
        <h3>{title}</h3>
        <p>{report}</p>
        <span className="rating">
          <StarHalfIcon fontSize="medium" htmlColor="yellow" /> {rating}
        </span>
        <div className="price_cover">
          $<span className="price">{price}</span>
        </div>
        <button onClick={addToBasket} className="add_to_cart">
          Add To Cart
        </button>
      </div>
    </li>
  );
}

export default Product;
