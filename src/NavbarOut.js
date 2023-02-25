import { Link } from "react-router-dom";
import ShoppingBasketTwoToneIcon from "@mui/icons-material/ShoppingBasketTwoTone";
import SearchIcon from "@mui/icons-material/Search";
import { useStateValue } from "./StateProvider";
import React from "react";
/* import MainPicture from "./bone-s-sakurako.jpeg"; */
import "./NavbarOut.css";

class NavbarOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleMenu = this.handleMenu.bind(this);
  }

  handleMenu(e) {
    e.preventDefault();
    console.log(e.target.nextElementSibling.childNodes[0]);
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const [{ basket }, dispatch] = useStateValue();
    return (
      <div className="nav_container">
        <div className="main_nav">
          <Link to="/" style={{ textDecorationLine: "none" }}>
            <div className="logo">
              <h2 className="logo_show">
                An<span>i</span>meOSL<span>i</span>brary
              </h2>
            </div>
          </Link>
          <div className="box_search">
            <input type="text" id="search_text" className="search_text" />
            <button className="search_icon">
              <SearchIcon />
            </button>
          </div>
          <h3 className="welcome">Home</h3>
          <Link to="/login">
            <button className="sign_in_button">SIGN IN</button>
          </Link>
          <Link to="/checkout">
            <ShoppingBasketTwoToneIcon fontSize="large" />
          </Link>
          {/* <BasketIcon /> */}
          <div className="items_added">
            <p className="number_items">{basket.length}</p>
          </div>
        </div>
        {/* <div className="nav_picture">
          <img src={MainPicture} className="nav_img" alt="error in Navbar" />
        </div> */}
        <div className="menu_container">
          <div className="menu_wrapper">
            <div
              className="hamburger"
              aria-expanded={this.state.open}
              onClick={this.handleMenu}
              aria-controls="menu_text"
            >
              <div className="single_burger"></div>
            </div>
            <div className="menu_content">
              <div
                id="menu_text"
                className="menu_text"
                aria-expanded={this.state.open}
              >
                <ul>
                  <li className="category">LEGENDARY SERIES</li>
                  <li className="category">MOVIES</li>
                  <li className="category">MANGAS</li>
                  <li className="category">WEATHER SERIES</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="motto_welcome">
            <h3>
              The <span>Universe</span> of Anime
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default NavbarOut;
