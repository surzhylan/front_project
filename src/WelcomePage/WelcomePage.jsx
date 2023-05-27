import w from "./WelcomePage.module.css";
import { NavLink } from "react-router-dom";
function WelcomePage() {
  return (
    <div className={w.WelcomePage}>
      <img src="./img/Home.png" alt="img" />
      <div className={w.content}>
        <h1 className={w.h1}>Welcome to Our Restaurant</h1>
        <p>
          People eat with their eyes and restaurant creates an easy way for <br />
          customers to order when they can see beautiful photos of your food
        </p>
        <div className={w.buttons}>
          <NavLink to="/reviews">
            <button>About Us</button>
          </NavLink>
          <NavLink to="/menu">
            <button>Menu</button>
          </NavLink>
        </div>
      </div>
      {/*<div className={w.imageContent}>
        <img src="./img/pasta.png" alt="" />
        <div className={w.leafImg}>
          <img src="./img/leaf.png" alt="" />
        </div>
        <div className={w.leafImg2}>
          <img src="./img/leaf.png" alt="" />
        </div>
        <div className={w.tomatoImg}>
          <img src="./img/tomato.png" alt="" />
        </div>
      </div>*/}
    </div>
  );
}

export default WelcomePage;
