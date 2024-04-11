import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import NavBar from "../components/NavBar";
import { navContent } from "../App";

import moonImg from "../assets/destination/image-moon.webp";
import marsImg from "../assets/destination/image-mars.webp";
import europaImg from "../assets/destination/image-europa.webp";
import titanImg from "../assets/destination/image-titan.webp";

const destinationContent = [
  {
    image: moonImg,
    imageAlt: "Moon image",
    name: "Moon",
    content:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    time: "3 days",
    id: 1,
  },
  {
    image: marsImg,
    imageAlt: "Mars Image",
    name: "Mars",
    content:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. km",
    time: "9 months",
    id: 2,
  },
  {
    image: europaImg,
    imageAlt: "Europa Image",
    name: "Europa",
    content:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. km",
    time: "3 years",
    id: 3,
  },
  {
    image: titanImg,
    imageAlt: "Titan Image",
    name: "Titan",
    content:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. km",
    time: "7 years",
    id: 4,
  },
];

const moonContent = destinationContent.find(({ id }) => id === 1);
const marsContent = destinationContent.find(({ id }) => id === 2);
const europaContent = destinationContent.find(({ id }) => id === 3);
const titanContent = destinationContent.find(({ id }) => id === 4);

export default function Destination() {
  const [moon, setMoon] = useState(true);
  const [mars, setMars] = useState(false);
  const [europa, setEuropa] = useState(false);
  const [titan, setTitan] = useState(false);

  const toggleMoon = () => {
    setMoon(true);
    setMars(false);
    setEuropa(false);
    setTitan(false);
  }

  const toggleMars = () => {
    setMoon(false);
    setMars(true);
    setEuropa(false);
    setTitan(false);
  }

  const toggleEuropa = () => {
    setMoon(false);
    setMars(false);
    setEuropa(true);
    setTitan(false);
  }

  const toggleTitan = () => {
    setMoon(false);
    setMars(false);
    setEuropa(false);
    setTitan(true);
  }

  return (
    <>
      <div className="mainContent-destination">
        <NavBar {...navContent} nav2Active="active" />
        <div className="destination-wrap container">
          <div className="image-section">
            <div className="title">
              <strong className="heading-num">01</strong>
              <p className="destination-header upperCase">
                Pick your destination
              </p>
            </div>

            {moon ? <ImageBox {...moonContent} /> : ""}
            {mars ? <ImageBox {...marsContent} /> : ""}
            {europa ? <ImageBox {...europaContent} /> : ""}
            {titan ? <ImageBox {...titanContent} /> : ""}
          </div>

          <div className="info">
            <div className="nav">
              <ul className="min-nav upperCase nav-text-alt">
                <li id={moon ? "active" : ""} onClick={toggleMoon}>
                  Moon
                </li>
                <li id={mars ? "active" : ""} onClick={toggleMars}>
                  Mars
                </li>
                <li id={europa ? "active" : ""} onClick={toggleEuropa}>
                  Europa
                </li>
                <li id={titan ? "active" : ""} onClick={toggleTitan}>
                  Titan
                </li>
              </ul>
            </div>
            {moon ? <TextBox {...moonContent} /> : ""}
            {mars ? <TextBox {...marsContent} /> : ""}
            {europa ? <TextBox {...europaContent} /> : ""}
            {titan ? <TextBox {...titanContent} /> : ""}
          </div>
        </div>
      </div>
    </>
  );
}




const ImageBox = (props) => {
  const {image, imageAlt} = props;
  return (
    <div className="image-wrap">
      <img src={image} alt={imageAlt} />
    </div>
  );
}

const TextBox = (props) => {
  const {name, content, distance, time} = props
  return (
    <>
      <div className="info-textBox">
        <h1 className="heading-1-alt upperCase">{name}</h1>
        <p className="body-text">{content}</p>
      </div>
      <hr className="info-line" />

      <div className="grid-info">
        <div>
          <p className="subheading-2 upperCase">Avg. Distance</p>
          <p className="subheading-1 upperCase">{distance}</p>
        </div>

        <div>
          <p className="subheading-2 upperCase">Est. travel time</p>
          <p className="subheading-1 upperCase">{time}</p>
        </div>
      </div>
    </>
  );
}