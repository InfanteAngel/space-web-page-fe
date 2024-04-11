import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { navContent } from "../App";



const techList = [
  {
    name: "LAUNCH VEHICLE",
    info: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",

    imageAlt: "Launch Vehicle Image",
    imgId: "launch-img-box",
    id: 1,
  },
  {
    name: "SPACEPORT",
    info: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",

    imageAlt: "Spaceport image",
    imgId: "spaceport-img-box",
    id: 2,
  },
  {
    name: "SPACE CAPSULE",
    info: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    imageAlt: "Space Capsule Image",
    imgId: "capsule-img-box",
    id: 3,
  },
];

const launchContent = techList.find(({ id }) => id === 1);
const portContent = techList.find(({ id }) => id === 2);
const capsuleContent = techList.find(({ id }) => id === 3);


export default function Technology() {
    const [launch, setLaunch] = useState(true);
    const [port, setPort] = useState(false);
    const [capsule, setCapsule] = useState(false)

    const toggleLaunch = () => {
        setLaunch(true);
        setPort(false);
        setCapsule(false);
    }
    const togglePort = () => {
        setLaunch(false);
        setPort(true);
        setCapsule(false);
    }
    const toggleCapsule = () => {
        setLaunch(false);
        setPort(false);
        setCapsule(true);
    }

  return (
    <>
      <div className="main-content-tech">
        <NavBar {...navContent} nav4Active="active" />
        <div className="tech-box container-tech">
          <div className="main-header">
            <div className="meet-header">
              <div className="title-tech">
                <strong className="heading-num">03</strong>
                <p className="upperCase destination-header">Space Launch 101</p>
              </div>
            </div>
          </div>
          <div className="main-content-wrap">
            <div className="nav-box subheading-1">
              <button className="navButton"  id={launch ? "active-btn" : ""} onClick={toggleLaunch}>
                1
              </button>
              <button className="navButton"  id={port ? "active-btn" : ""} onClick={togglePort}>
                2
              </button>
              <button className="navButton" id={capsule ? "active-btn" : ""} onClick={toggleCapsule}>
                3
              </button>
            </div>
            {launch ? <ContentInfo {...launchContent} imgId = "launchImg"/>  :  null}
            {port ? <ContentInfo {...portContent} imgId = "portImg" /> :  null}
            {capsule ? <ContentInfo {...capsuleContent} imgId="capsuleImg" /> :  null}
          </div>
        </div>
      </div>
    </>
  );
}


const ContentInfo = (props) => {
    const {name, info, imgId } = props;
    return (
      <>
        <div className="info-box">
          <p className="upperCase subheading-2">The Terminology...</p>
          <p className="heading-3-alt upperCase">{name}</p>
          <p className="body-text">{info}</p>
        </div>

        <div className="image-box" >
          <div className="myImg" id={imgId}></div>
        </div>
      </>
    );
}