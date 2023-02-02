import { useState, useEffect } from "react";
import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function HeartHealth() {
  const [snackHealth, setSnackHealth] = useState();

  return (
    <>
      <p> {snackHealth.is_healthy ? (
        <span>
          <img src={heartSolid}></img>
        </span>
      ) : (
        <span>
          <img src={heartOutline}></img>
        </span>
      )}</p>
    </>
  );
}

export default HeartHealth;