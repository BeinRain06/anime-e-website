import React from "react";
import "./CheckoutProduct.css";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { useStateValue } from "./StateProvider";
/* import { Kindaichi } from "./imagesHome"; */

function CheckoutProduct({
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

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="anime_mangaOut" id={id}>
      <div className="studioOut">
        <div>
          <h2>{title}</h2>
          <p>{report}</p>
        </div>
        <div>
          <span className="studio_name">
            <h3>Studio</h3>:{studio}
          </span>
          <span className="released_year">
            <h3>Released</h3>: {released}
          </span>
        </div>
      </div>
      <div className="recordOut">
        <img src={image} className="anime_img_checkout" alt="studio missing!" />
        <span className="ratingOut">
          <div>
            <h3>Ratings</h3>:
            <StarHalfIcon fontSize="medium" htmlColor="yellow" /> {rating}
          </div>
          <div className="price_cover">
            $<span className="price">{price}</span>
          </div>
        </span>
        <button onClick={removeFromBasket} className="remove_to_cart">
          Remove To Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
