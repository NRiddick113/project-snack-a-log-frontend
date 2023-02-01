import { Link } from "react-router-dom";

function Snack({ snack }) {
  return (
    <div className="snack">
      <img src={snack.image}></img>
      {/* <p>
        {snack.is_healthy ? (
          <img src="./assets/heart-solid.png" alt="heart"></img>
        ) : (
          <img src="./assets/heart-regular.png" alt="outline heart"></img>
        )}
      </p> */}
      <Link to={`/snacks/${snack.id}`}>
        <p>{snack.name}</p>
      </Link>
    </div>
  );
}

export default Snack;
