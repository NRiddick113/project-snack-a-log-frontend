import { Link } from "react-router-dom";
import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";


function Snack({ snack }) {
  return (
    <div>
      <img src={snack.image}></img>
       <p>
        {snack.is_healthy ? 
          <img src={heartSolid}></img>
        : 
          <img src={heartOutline}></img>
        }
      </p> 
      <Link to={`/snacks/${snack.id}`}>
        <p>{snack.name}</p>
      </Link>
    </div>
  );
}

export default Snack;
