import React from "react";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout_bill">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="selected_items">Selected Items :{basket.length} </p>
            <p className="price">
              Total Price: <span>$</span>
              <span className="value_price">{value} </span>
            </p>
            <button className="proceed">PROCEED</button>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
      />
    </div>
  );
}
export default Subtotal;
