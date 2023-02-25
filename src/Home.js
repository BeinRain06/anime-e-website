import StarHalfIcon from "@mui/icons-material/StarHalf";
import React from "react";
import "./Home.css";
import Product from "./Product";

import {
  Baki,
  Boku,
  CityHunter,
  Hokuto,
  HunterXHunter,
  Kindaichi,
  Komi,
  Kuruko,
  DrMarch,
  MirraiNikki,
  Paranoia,
  Recreators,
  City,
  Record,
  ScumsSwitch,
  ShamanKing,
  Sherlock,
  Beginning,
  HouseHusband,
} from "./imagesHome";

function Home() {
  return (
    <div className="welcome_home">
      <div className="home_content">
        <h2 className="home_title">Most Popular</h2>
        <div className="section_home">
          <span className="category_title">MANGAS</span>
          <ul className="my_anime_manga">
            <Product
              id="0"
              title="Baki Hanma"
              image={Baki}
              report=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis."
              rating="4.6"
              price="4"
              released="1996"
              studio="Yukida TV"
            />
            {/* <li className="anime_manga">
              <div className="studio">
                <img src={Baki} className="anime_img" alt="studio missing!" />
                <span className="studio_name">yukida TV</span>
                <span className="released_year">1996</span>
              </div>
              <div className="record">
                <h3>Baki Hanma</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis.
                </p>
                <span className="rating">
                  <StarHalfIcon fontSize="medium" htmlColor="yellow" /> 4.6
                </span>
                <div className="price_cover">
                  $<span className="price">4</span>
                </div>
                <button onClick={addToBasket} className="add_to_cart">
                  Add To Cart
                </button>
              </div>
            </li> */}
            <Product
              id="1"
              title="boku-dake-ga-nai-machi-erased"
              image={Boku}
              report=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis."
              rating="4.6"
              price="4"
              released="1996"
              studio="Yukida TV"
            />
            {/* <li className="anime_manga">
              <div className="studio">
                <img src={Boku} className="anime_img" alt="studio missing!" />
                <span className="studio_name">yukida TV</span>
                <span className="released_year">1996</span>
              </div>
              <div className="record">
                <h3>boku-dake-ga-nai-machi-erased</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis.
                </p>
                <span className="rating">
                  <StarHalfIcon fontSize="medium" htmlColor="yellow" /> 4.6
                </span>
                <div className="price_cover">
                  $<span className="price">4</span>
                </div>
                <button onClick={addToBasket} className="add_to_cart">
                  Add To Cart
                </button>
              </div>
            </li> */}
            <Product
              id="2"
              title="city-hunter"
              image={CityHunter}
              report=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis."
              rating="4.6"
              price="4"
              released="1996"
              studio="Yukida TV"
            />
            {/* <li className="anime_manga">
              <div className="studio">
                <img
                  src={CityHunter}
                  className="anime_img"
                  alt="studio missing!"
                />
                <span className="studio_name">yukida TV</span>
                <span className="released_year">1996</span>
              </div>
              <div className="record">
                <h3>city-hunter</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis.
                </p>
                <span className="rating">
                  <StarHalfIcon fontSize="medium" htmlColor="yellow" /> 4.6
                </span>
                <div className="price_cover">
                  $<span className="price">4</span>
                </div>
                <button onClick={addToBasket} className="add_to_cart">
                  Add To Cart
                </button>
              </div>
            </li> */}
            <Product
              id="3"
              title="hokuto-no-ken"
              image={Hokuto}
              report=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis."
              rating="4.6"
              price="4"
              released="1996"
              studio="Yukida TV"
            />
            {/* <li className="anime_manga">
              <div className="studio">
                <img src={Hokuto} className="anime_img" alt="studio missing!" />
                <span className="studio_name">yukida TV</span>
                <span className="released_year">1996</span>
              </div>
              <div className="record">
                <h3>hokuto-no-ken</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis.
                </p>
                <span className="rating">
                  <StarHalfIcon fontSize="medium" htmlColor="yellow" /> 4.6
                </span>
                <div className="price_cover">
                  $<span className="price">4</span>
                </div>
                <button onClick={addToBasket} className="add_to_cart">
                  Add To Cart
                </button>
              </div>
            </li> */}
            <Product
              id="4"
              title="hunter-x-hunter"
              image={HunterXHunter}
              report=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis."
              rating="4.6"
              price="4"
              released="1996"
              studio="Yukida TV"
            />
            {/* <li className="anime_manga">
              <div className="studio">
                <img
                  src={HunterXHunter}
                  className="anime_img"
                  alt="studio missing!"
                />
                <span className="studio_name">yukida TV</span>
                <span className="released_year">1996</span>
              </div>
              <div className="record">
                <h3>hunter-x-hunter</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis.
                </p>
                <span className="rating">
                  <StarHalfIcon fontSize="medium" htmlColor="yellow" /> 4.6
                </span>
                <div className="price_cover">
                  $<span className="price">4</span>
                </div>
                <button onClick={addToBasket} className="add_to_cart">
                  Add To Cart
                </button>
              </div>
            </li> */}
            <Product
              id="5"
              title="kindaichi-shounen-no-jikenbo"
              image={Kindaichi}
              report=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis."
              rating="4.6"
              price="4"
              released="1996"
              studio="Yukida TV"
            />
            {/* <li className="anime_manga">
              <div className="studio">
                <img
                  src={Kindaichi}
                  className="anime_img"
                  alt="studio missing!"
                />
                <span className="studio_name">yukida TV</span>
                <span className="released_year">1996</span>
              </div>
              <div className="record">
                <h3>kindaichi-shounen-no-jikenbo</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis.
                </p>
                <span className="rating">
                  <StarHalfIcon fontSize="medium" htmlColor="yellow" /> 4.6
                  <div className="price_cover">
                    $<span className="price">4</span>
                  </div>
                </span>
                <button onClick={addToBasket} className="add_to_cart">
                  Add To Cart
                </button>
              </div>
            </li> */}
          </ul>
        </div>
        <div className="section_home">
          <span className="category_title">MOVIES</span>
          <ul className="my_anime_manga">
            <Product
              id="6"
              title="komi-can-t-communicate"
              image={Komi}
              report=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis."
              rating="4.6"
              price="4"
              released="1996"
              studio="Yukida TV"
            />
            {/* <li className="anime_manga">
              <div className="studio">
                <img src={Komi} className="anime_img" alt="studio missing!" />
                <span className="studio_name">yukida TV</span>
                <span className="released_year">1996</span>
              </div>
              <div className="record">
                <h3>komi-can-t-communicate</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis.
                </p>
                <span className="rating">
                  <StarHalfIcon fontSize="medium" htmlColor="yellow" /> 4.6
                  <div className="price_cover">
                    $<span className="price">4</span>
                  </div>
                </span>
                <button onClick={addToBasket} className="add_to_cart">
                  Add To Cart
                </button>
              </div>
            </li> */}
            <Product
              id="7"
              title="kuruko-s-basket"
              image={Kuruko}
              report=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis."
              rating="4.6"
              price="4"
              released="1996"
              studio="Yukida TV"
            />
            {/* <li className="anime_manga">
              <div className="studio">
                <img src={Kuruko} className="anime_img" alt="studio missing!" />
                <span className="studio_name">yukida TV</span>
                <span className="released_year">1996</span>
              </div>
              <div className="record">
                <h3>kuruko-s-basket</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis.
                </p>
                <span className="rating">
                  <StarHalfIcon fontSize="medium" htmlColor="yellow" /> 4.6
                  <div className="price_cover">
                    $<span className="price">4</span>
                  </div>
                </span>
                <button onClick={addToBasket} className="add_to_cart">
                  Add To Cart
                </button>
              </div>
            </li> */}
            <Product
              id="8"
              title="les-4-filles-du-docteur-march"
              image={DrMarch}
              report=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis."
              rating="4.6"
              price="4"
              released="1996"
              studio="Yukida TV"
            />
            {/* <li className="anime_manga">
              <div className="studio">
                <img
                  src={DrMarch}
                  className="anime_img"
                  alt="studio missing!"
                />
                <span className="studio_name">yukida TV</span>
                <span className="released_year">1996</span>
              </div>
              <div className="record">
                <h3>les-4-filles-du-docteur-march</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis.
                </p>
                <span className="rating">
                  <StarHalfIcon fontSize="medium" htmlColor="yellow" /> 4.6
                  <div className="price_cover">
                    $<span className="price">4</span>
                  </div>
                </span>
                <button onClick={addToBasket} className="add_to_cart">
                  Add To Cart
                </button>
              </div>
            </li> */}
            <Product
              id="9"
              title="mirrai-nikki"
              image={MirraiNikki}
              report=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis."
              rating="4.6"
              price="4"
              released="1996"
              studio="Yukida TV"
            />
            {/* <li className="anime_manga">
              <div className="studio">
                <img
                  src={MirraiNikki}
                  className="anime_img"
                  alt="studio missing!"
                />
                <span className="studio_name">yukida TV</span>
                <span className="released_year">1996</span>
              </div>
              <div className="record">
                <h3>mirrai-nikki</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis.
                </p>
                <span className="rating">
                  <StarHalfIcon fontSize="medium" htmlColor="yellow" /> 4.6
                  <div className="price_cover">
                    $<span className="price">4</span>
                  </div>
                </span>
                <button onClick={addToBasket} className="add_to_cart">
                  Add To Cart
                </button>
              </div>
            </li> */}
            <Product
              id="10"
              title="paranoia-agent"
              image={Paranoia}
              report=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis."
              rating="4.6"
              price="4"
              released="1996"
              studio="Yukida TV"
            />
            {/* <li className="anime_manga">
              <div className="studio">
                <img
                  src={Paranoia}
                  className="anime_img"
                  alt="studio missing!"
                />
                <span className="studio_name">yukida TV</span>
                <span className="released_year">1996</span>
              </div>
              <div className="record">
                <h3>paranoia-agent</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis.
                </p>
                <span className="rating">
                  <StarHalfIcon fontSize="medium" htmlColor="yellow" /> 4.6
                  <div className="price_cover">
                    $<span className="price">4</span>
                  </div>
                </span>
                <button onClick={addToBasket} className="add_to_cart">
                  Add To Cart
                </button>
              </div>
            </li> */}
            <Product
              id="11"
              title="re-creators"
              image={Recreators}
              report=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis."
              rating="4.6"
              price="4"
              released="1996"
              studio="Yukida TV"
            />
            {/* <li className="anime_manga">
              <div className="studio">
                <img
                  src={Recreators}
                  className="anime_img"
                  alt="studio missing!"
                />
                <span className="studio_name">yukida TV</span>
                <span className="released_year">1996</span>
              </div>
              <div className="record">
                <h3>re-creators</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis.
                </p>
                <span className="rating">
                  <StarHalfIcon fontSize="medium" htmlColor="yellow" /> 4.6
                  <div className="price_cover">
                    $<span className="price">4</span>
                  </div>
                </span>
                <button onClick={addToBasket} className="add_to_cart">
                  Add To Cart
                </button>
              </div>
            </li> */}
          </ul>
        </div>
        <div className="section_home">
          <span className="category_title">SERIES</span>
          <ul className="my_anime_manga">
            <Product
              id="12"
              title="record-of-ragnagok"
              image={City}
              report=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis."
              rating="4.6"
              price="4"
              released="1996"
              studio="Yukida TV"
            />
            {/* <li className="anime_manga">
              <div className="studio">
                <img src={City} className="anime_img" alt="studio missing!" />
                <span className="studio_name">yukida TV</span>
                <span className="released_year">1996</span>
              </div>
              <div className="record">
                <h3>record-of-ragnagok</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis.
                </p>
                <span className="rating">
                  <StarHalfIcon fontSize="medium" htmlColor="yellow" /> 4.6
                  <div className="price_cover">
                    $<span className="price">4</span>
                  </div>
                </span>
                <button onClick={addToBasket} className="add_to_cart">
                  Add To Cart
                </button>
              </div>
            </li> */}
            <Product
              id="13"
              title="record-of-ragnagok"
              image={Record}
              report=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis."
              rating="4.6"
              price="4"
              released="1996"
              studio="Yukida TV"
            />
            {/* <li className="anime_manga">
              <div className="studio">
                <img src={Record} className="anime_img" alt="studio missing!" />
                <span className="studio_name">yukida TV</span>
                <span className="released_year">1996</span>
              </div>
              <div className="record">
                <h3>record-of-ragnagok</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis.
                </p>
                <span className="rating">
                  <StarHalfIcon fontSize="medium" htmlColor="yellow" /> 4.6
                  <div className="price_cover">
                    $<span className="price">4</span>
                  </div>
                </span>
                <button onClick={addToBasket} className="add_to_cart">
                  Add To Cart
                </button>
              </div>
            </li> */}
            <Product
              id="14"
              title="scum-s-wish"
              image={ScumsSwitch}
              report=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis."
              rating="4.6"
              price="4"
              released="1996"
              studio="Yukida TV"
            />
            {/* <li className="anime_manga">
              <div className="studio">
                <img
                  src={ScumsSwitch}
                  className="anime_img"
                  alt="studio missing!"
                />
                <span className="studio_name">yukida TV</span>
                <span className="released_year">1996</span>
              </div>
              <div className="record">
                <h3>scum-s-wish</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis.
                </p>
                <span className="rating">
                  <StarHalfIcon fontSize="medium" htmlColor="yellow" /> 4.6
                  <div className="price_cover">
                    $<span className="price">4</span>
                  </div>
                </span>
                <button onClick={addToBasket} className="add_to_cart">
                  Add To Cart
                </button>
              </div>
            </li> */}
            <Product
              id="15"
              title="shaman-king"
              image={ShamanKing}
              report=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis."
              rating="4.6"
              price="4"
              released="1996"
              studio="Yukida TV"
            />
            {/* <li className="anime_manga">
              <div className="studio">
                <img
                  src={ShamanKing}
                  className="anime_img"
                  alt="studio missing!"
                />
                <span className="studio_name">yukida TV</span>
                <span className="released_year">1996</span>
              </div>
              <div className="record">
                <h3>shaman-king</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis.
                </p>
                <span className="rating">
                  <StarHalfIcon fontSize="medium" htmlColor="yellow" /> 4.6
                  <div className="price_cover">
                    $<span className="price">4</span>
                  </div>
                </span>
                <button onClick={addToBasket} className="add_to_cart">
                  Add To Cart
                </button>
              </div>
            </li> */}
            <Product
              id="16"
              title="sherloc-holmes"
              image={Sherlock}
              report=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis."
              rating="4.6"
              price="4"
              released="1996"
              studio="Yukida TV"
            />
            {/* <li className="anime_manga">
              <div className="studio">
                <img
                  src={Sherlock}
                  className="anime_img"
                  alt="studio missing!"
                />
                <span className="studio_name">yukida TV</span>
                <span className="released_year">1996</span>
              </div>
              <div className="record">
                <h3>sherloc-holmes</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis.
                </p>
                <span className="rating">
                  <StarHalfIcon fontSize="medium" htmlColor="yellow" /> 4.6
                  <div className="price_cover">
                    $<span className="price">4</span>
                  </div>
                </span>
                <button onClick={addToBasket} className="add_to_cart">
                  Add To Cart
                </button>
              </div>
            </li> */}
            <Product
              id="17"
              title="the-beginning"
              image={Beginning}
              report=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis."
              rating="4.6"
              price="4"
              released="1996"
              studio="Yukida TV"
            />
            {/* <li className="anime_manga">
              <div className="studio">
                <img
                  src={Beginning}
                  className="anime_img"
                  alt="studio missing!"
                />
                <span className="studio_name">yukida TV</span>
                <span className="released_year">1996</span>
              </div>
              <div className="record">
                <h3>the-beginning</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis.
                </p>
                <span className="rating">
                  <StarHalfIcon fontSize="medium" htmlColor="yellow" /> 4.6
                  <div className="price_cover">
                    $<span className="price">4</span>
                  </div>
                </span>
                <button onClick={addToBasket} className="add_to_cart">
                  Add To Cart
                </button>
              </div>
            </li> */}
            <Product
              id="18"
              title="the-way-of-the-househusband"
              image={HouseHusband}
              report=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis."
              rating="4.6"
              price="4"
              released="1996"
              studio="Yukida TV"
            />
            {/* <li className="anime_manga">
              <div className="studio">
                <img
                  src={HouseHusband}
                  className="anime_img"
                  alt="studio missing!"
                />
                <span className="studio_name">yukida TV</span>
                <span className="released_year">1996</span>
              </div>
              <div className="record">
                <h3>the-way-of-the-househusband</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum pariatur ipsa libero. Ex accusamus asperiores
                  explicabo nisi assumenda illum, consequuntur nobis.
                </p>
                <span className="rating">
                  <StarHalfIcon fontSize="medium" htmlColor="yellow" /> 4.6
                  <div className="price_cover">
                    $<span className="price">4</span>
                  </div>
                </span>
                <button onClick={addToBasket} className="add_to_cart">
                  Add To Cart
                </button>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
