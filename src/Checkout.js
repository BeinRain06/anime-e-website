import React from "react";
import "./Checkout.css";
import Theo from "./theo-la-batte-de-la-victoire.jpeg";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue;

  return (
    <div className="checkout_container">
      <div className="checkout_content">
        <div className="checkout_added_items">
          <div className="checkout_show_img">
            <img
              src={Theo}
              alt="error checkout img"
              className="check_content_img"
            />
          </div>
          {basket.map((anime) => {
            <CheckoutProduct
              id={anime.id}
              title={anime.title}
              image={anime.image}
              report={anime.report}
              rating={anime.rating}
              price={anime.price}
              released={anime.released}
              studio={anime.studio}
            />;
          })}
          {/*           <CheckoutProduct />
          <CheckoutProduct /> */}
        </div>
        <Subtotal />
        {/* <div className="checkout_bill">
          <p className="selected_items">Selected Items : 0</p>
          <p className="price">
            Total Price: <span>$</span>
            <span className="value_price">0</span>
          </p>
          <button className="proceed">PROCEED</button>
        </div> */}
      </div>
    </div>
  );
}

export default Checkout;
