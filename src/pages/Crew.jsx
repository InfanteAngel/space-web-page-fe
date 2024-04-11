import React from "react";
import NavBar from "../components/NavBar";
import { navContent } from "../App";
import { useState } from "react";
import douglasImg from "../assets/crew/image-douglas-hurley.webp";
import markImg from "../assets/crew/image-mark-shuttleworth.webp";
import victorImg from "../assets/crew/image-victor-glover.webp";
import anoushehImg from "../assets/crew/image-anousheh-ansari.webp";

const crewInfoList = [
  {
    title: "Commander",
    name: "Douglas Hurley",
    info: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: douglasImg,
    imageAlt: "Commander Douglas Hurley",
    imgId: "image-box-douglas",
    id: 1,
  },
  {
    title: "Mission Specialist ",
    name: "MARK SHUTTLEWORTH",
    info: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: markImg,
    imageAlt: "Mark Shuttleworth",
    imgId: "image-box-mark",
    id: 2,
  },
  {
    title: "PILOT",
    name: "Victor Glover",
    info: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    image: victorImg,
    imageAlt: "Victor Glover",
    imgId: "image-box-victor",
    id: 3,
  },
  {
    title: "Flight Engineer",
    name: "Anousheh Ansari",
    info: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    image: anoushehImg,
    imageAlt: "Anousheh Ansari",
    imgId: "image-box-ansari",
    id: 4,
  },
];

const douglasInfo = crewInfoList.find(({ id }) => id === 1);
const markInfo = crewInfoList.find(({ id }) => id === 2);
const victorInfo = crewInfoList.find(({ id }) => id === 3);
const anoushehInfo = crewInfoList.find(({ id }) => id === 4);

export default function Crew() {
  const [douglas, setDouglas] = useState(true);
  const [mark, setMark] = useState(false);
  const [victor, setVictor] = useState(false);
  const [ano, setAno] = useState(false);

  const toggleDouglas = () => {
    setDouglas(true);
    setMark(false);
    setVictor(false);
    setAno(false);
  };
  const toggleMark = () => {
    setDouglas(false);
    setMark(true);
    setVictor(false);
    setAno(false);
  };
  const toggleVictor = () => {
    setDouglas(false);
    setMark(false);
    setVictor(true);
    setAno(false);
  };
  const toggleAno = () => {
    setDouglas(false);
    setMark(false);
    setVictor(false);
    setAno(true);
  };
  return (
    <>
      <div className="main-content-crew">
        <NavBar {...navContent} nav3Active="active" />
        <div className="crew-wrap container">
          <dis className="crewInfo-box">
            <div className="meet-header">
              <div className="title-crew">
                <strong className="heading-num">02</strong>
                <p className="upperCase destination-header">Meet Your Crew</p>
              </div>
            </div>

            {douglas ? <CrewInfo {...douglasInfo} /> : ""}
            {mark ? <CrewInfo {...markInfo} /> : ""}
            {victor ? <CrewInfo {...victorInfo} /> : ""}
            {ano ? <CrewInfo {...anoushehInfo} /> : ""}

            <div className="nav-btns">
              <button
                className="dot-btn"
                id={douglas ? "active-dot" : ""}
                onClick={toggleDouglas}
              ></button>
              <button
                className="dot-btn"
                id={mark ? "active-dot" : ""}
                onClick={toggleMark}
              ></button>
              <button
                className="dot-btn"
                id={victor ? "active-dot" : ""}
                onClick={toggleVictor}
              ></button>
              <button
                className="dot-btn"
                id={ano ? "active-dot" : ""}
                onClick={toggleAno}
              ></button>
            </div>
          </dis>

          {douglas ? <CrewImg {...douglasInfo} /> : ""}
          {mark ? <CrewImg {...markInfo} /> : ""}
          {victor ? <CrewImg {...victorInfo} /> : ""}
          {ano ? <CrewImg {...anoushehInfo} /> : ""}
        </div>


        {/* Manually Repositioned elements */}


        <div className="mobile-gridder container">
          <div className="meet-header">
            <div className="title-crew">
              <strong className="heading-num">02</strong>
              <p className="upperCase destination-header">Meet Your Crew</p>
            </div>
          </div>

          <div className="crew-img-box">
            {douglas ? <CrewImg {...douglasInfo} /> : ""}
            {mark ? <CrewImg {...markInfo} /> : ""}
            {victor ? <CrewImg {...victorInfo} /> : ""}
            {ano ? <CrewImg {...anoushehInfo} /> : ""}
          </div>

          <hr className="image-line" />

          <div className="nav-btns">
            <button
              className="dot-btn"
              id={douglas ? "active-dot" : ""}
              onClick={toggleDouglas}
            ></button>
            <button
              className="dot-btn"
              id={mark ? "active-dot" : ""}
              onClick={toggleMark}
            ></button>
            <button
              className="dot-btn"
              id={victor ? "active-dot" : ""}
              onClick={toggleVictor}
            ></button>
            <button
              className="dot-btn"
              id={ano ? "active-dot" : ""}
              onClick={toggleAno}
            ></button>
          </div>

          <div className="crew-info-box">
            {douglas ? <CrewInfo {...douglasInfo} /> : ""}
            {mark ? <CrewInfo {...markInfo} /> : ""}
            {victor ? <CrewInfo {...victorInfo} /> : ""}
            {ano ? <CrewInfo {...anoushehInfo} /> : ""}
          </div>
        </div>
      </div>
    </>
  );
}

const CrewInfo = (props) => {
  const { title, name, info } = props;
  return (
    <>
      <div className="crew-header">
        <p className="crew-title upperCase">{title}</p>
        <p className="crew-name heading-3-alt upperCase">{name}</p>
      </div>

      <div className="crew-info">
        <p className="body-text">{info}</p>
      </div>
    </>
  );
};

const CrewImg = (props) => {
  const { imgId, image, imageAlt } = props;
  return (
    <div className="image-box-crew" id={imgId}>
      <img src={image} alt={imageAlt} />
    </div>
  );
};
