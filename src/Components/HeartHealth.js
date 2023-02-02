import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function HeartHealth({snackHealth}) {
 
  return (
    <>
       <p>
        {snackHealth ? 
          <img src={heartSolid}></img> 
         : (
          <img src={heartOutline}></img>
        )}
      </p>
    </>
  );
}

export default HeartHealth;