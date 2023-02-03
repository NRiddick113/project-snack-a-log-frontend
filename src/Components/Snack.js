import { Link } from "react-router-dom";
import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function Snack({ snack }) {
  return (
    <div>
      <Link to={`/snacks/${snack.id}`}>
        <img src={snack.image}></img>
      </Link>
      <p>
        {snack.is_healthy ? (
          <img src={heartSolid}></img>
        ) : (
          <img src={heartOutline}></img>
        )}
      </p>
      <p>{snack.name}</p>
    </div>
  );
}

export default Snack;
