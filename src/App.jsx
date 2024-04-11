import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import bgImage from "../src/assets/home/background-home-desktop.jpg";

const logo = (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
    <g fill="none" fillRule="evenodd">
      <circle cx="24" cy="24" r="24" fill="#FFF" />
      <path
        fill="#0B0D17"
        d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
      />
    </g>
  </svg>
);

export const navContent = {
  navLogo: logo,
  navNum1: "00",
  navNum2: "01",
  navNum3: "02",
  navNum4: "03",
  nav1: "Home",
  nav2: "Destination",
  nav3: "Crew",
  nav4: "Technology",
  nav1Active: "",
  nav2Active: "",
  nav3Active: "",
  nav4Active: "",
};

function App() {
  const [count, setCount] = useState(0);

  document.body.style.setProperty(
    "background-image",
    'url("background-home-desktop.jpg")'
  );

  return (
    <>
      <div className="mainContent">
        <NavBar {...navContent} nav1Active="active" />
        <div className="home-box container">
          <div className="header-home ">
            <p className="heading-5 upperCase">So, You want to travel to</p>
            <h1 className="heading-1 upperCase">Space</h1>
            <p className="body-text">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>

          <div className="explore-button-wrap">
            <Link to="/Destination">
              <button className="explore-button heading-3 upperCase">
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;


