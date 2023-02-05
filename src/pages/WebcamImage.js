// import React from "react";
import Webcam from "react-webcam";
import React, { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import "./webcamImage.css";

const WebcamImage = () => {
  const [img, setImg] = useState(null);
  const webcamRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      buttonRef.current.click();
      const formData = new FormData();
      formData.append("owner", "khushal");
      formData.append("imgData", img);
      console.log(img);
      if (img) {
        console.log("Inside Image");
        axios
          .post("http://localhost:8080/imgData", formData, {})
          .then((res) => {
            console.log("Hello inside frontend");
            console.log(res);
          })
          .catch((err) => {
            alert("Something went wrong!");
            console.log(err);
          });
      }

      setImg(null);
    }, 10000);
  }, [img]);

  const videoConstraints = {
    width: 420,
    height: 420,
    facingMode: "user",
  };
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
  }, [webcamRef]);
  return (
    <div className="webcamContainer">
      {img === null ? (
        <>
          <Webcam
            audio={false}
            mirrored={true}
            height={400}
            width={400}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
          <button ref={buttonRef} onClick={capture}>
            Capture photo
          </button>
        </>
      ) : (
        <>
          <img src={img} alt="screenshot" />
          <button onClick={() => setImg(null)}>Retake</button>
        </>
      )}
    </div>
  );
};

export default WebcamImage;
