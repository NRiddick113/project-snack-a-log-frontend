import { Link } from "react-router-dom";
import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function Snack({ snack }) {
  return (

    <div style={{
      padding: 5,
      height: 'auto',
      textAlign:'center',
      margin: '40px auto'

    }}>
      <Link to={`/snacks/${snack.id}`}>
      <img src={snack.image}></img>
      </Link>
      <div>
      <span style={{width:'33px', height:'33px'}}>
        {snack.is_healthy ? (
          <img src={heartSolid} style={{height: '20px', width:'20px'}} alt="heart-solid"></img>

        ) : (
          <img src={heartOutline} style={{height: '20px', width:'20px'}}></img>
        )}

      </span>
        <p>{snack.name}</p>
        </div>

    </div>
  );
}

export default Snack;
