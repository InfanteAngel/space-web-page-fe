import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navContent } from "../App";

const bars = (
  <svg id="" xmlns="http://www.w3.org/2000/svg" width="24" height="21">
    <g fill="#D0D6F9" fillRule="evenodd">
      <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
    </g>
  </svg>
);

const close = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
    <g fill="#D0D6F9" fillRule="evenodd">
      <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
      <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
    </g>
  </svg>
);

export default function NavBar(props) {
  const {
    navLogo,
    navNum1,
    navNum2,
    navNum3,
    navNum4,
    nav1,
    nav2,
    nav3,
    nav4,
    nav1Active,
    nav2Active,
    nav3Active,
    nav4Active,
  } = props;
  const [active, setActive] = useState(false);

  const userToggle = () =>{
    if(active){
      setActive(false);
      return;
    }
    else {
      setActive(true);
    }
  }

  return (
    <div className="navBar">
      <div className="nav-wrap">
        <div className="nav-logo">{navLogo}</div>
        <div className="nav-line">
          <hr className="line" />
        </div>

        <div className="nav-section nav-text upperCase">
          <ul className="nav-list">
            <Link to="/">
              <li className="navItem" id={nav1Active}>
                <div className="navText">
                  <p className="num-nav">
                    <strong>{navNum1}</strong>
                  </p>
                  <p>{nav1}</p>
                </div>
              </li>
            </Link>
            <Link to="/Destination">
              <li className="navItem" id={nav2Active}>
                <div className="navText">
                  <p className="num-nav">
                    <strong>{navNum2}</strong>
                  </p>
                  <p>{nav2}</p>
                </div>
              </li>
            </Link>
            <Link to="/Crew">
              <li className="navItem" id={nav3Active}>
                <div className="navText">
                  <p className="num-nav">
                    <strong>{navNum3}</strong>
                  </p>
                  <p>{nav3}</p>
                </div>
              </li>
            </Link>
            <Link to="/Technology">
              <li className="navItem" id={nav4Active}>
                <div className="navText">
                  <p className="num-nav">
                    <strong>{navNum4}</strong>
                  </p>
                  <p>{nav4}</p>
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="nav-wrap-mb nav-text">
        <ul>
          <li>
            {" "}
            <div className="nav-logo">{navLogo}</div>
          </li>
          <li className="toggles">
            <div className="toggle-mb ">
              <div className="toggle-btn" aria-hidden="false" id="barsIc">
                <button onClick={userToggle} type="button">
                  {active ? close : bars}
                </button>
              </div>

              {active ? <MobileNav {...navContent}/> : null}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

const MobileNav = (props) => {
  const {
    navNum1,
    navNum2,
    navNum3,
    navNum4,
    nav1,
    nav2,
    nav3,
    nav4,
  } = props;

  return (
    <>
      <div className="mobile-nav">
        <ul>
          <Link to="/">
            <li className="mb-navItem">
              {" "}
              <div className="navText">
                <p className="num-nav">
                  <strong>{navNum1}</strong>
                </p>
                <p>{nav1}</p>
              </div>
            </li>
          </Link>
          <Link to="/Destination">
            <li className="mb-navItem">
              {" "}
              <div className="navText">
                <p className="num-nav">
                  <strong>{navNum2}</strong>
                </p>
                <p>{nav2}</p>
              </div>
            </li>
          </Link>
          <Link to="/Crew">
            <li className="mb-navItem">
              {" "}
              <div className="navText">
                <p className="num-nav">
                  <strong>{navNum3}</strong>
                </p>
                <p>{nav3}</p>
              </div>
            </li>
          </Link>
          <Link to="/Technology">
            <li className="mb-navItem">
              {" "}
              <div className="navText">
                <p className="num-nav">
                  <strong>{navNum4}</strong>
                </p>
                <p>{nav4}</p>
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}