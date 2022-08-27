import React, { useEffect, useState } from "react";
import { FaStopCircle, FaPlayCircle } from "react-icons/fa";
import Timer from "./Timer";
import TypeWriter from "./TypeWriter";
import "./TimerBox.css";
function TimerBox() {
  const [show, setShow] = useState(false);
  const [showHand, setShowHand] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 5000);
    setTimeout(() => {
      setTimeout(() => {
        setShowHand(true);
      }, 4000);
      setTimeout(() => {
        setShowHand(false);
      }, 6000);
    });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "white",
        color: "black",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        width: "400px",
        borderRadius: "10px",
      }}
    >
      <div>
        <TypeWriter />
      </div>
      <div
        style={{
          display: "flex",
          backgroundColor: "white",
          color: "black",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <div>{show ? <Timer /> : "0 : 00 : 00"}</div>
        <div>
          <div style={{ position: "relative" }}>
            {show ? (
              <FaStopCircle
                style={{
                  color: "tomato",
                  borderRadius: "25px",
                  fontSize: "2rem",
                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                }}
              />
            ) : (
              <FaPlayCircle
                style={{
                  color: "purple",
                  borderRadius: "25px",
                  fontSize: "2rem",
                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                }}
              />
            )}
            {showHand && (
              <span
                style={{
                  position: "absolute",
                  top: "30px",
                  left: "-15px",
                  width: "80px",
                }}
                className="timer-box-animation"
              >
                <img
                  src="https://public-assets.toggl.com/b/static/64fbdaf45a4b3a8f908596e24852e2c4/90bc4/toggl-hand.avif"
                  alt="hand"
                />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimerBox;
