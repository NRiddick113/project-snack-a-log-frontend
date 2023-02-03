import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"
import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

import axios from "axios";
import HeartHealth from "./HeartHealth";


const API = process.env.REACT_APP_API_URL;

function SnackDetails(){
    const { id } = useParams();
    const [snack, setSnack] = useState({});
    const [snackHealth, SetSnackHealth] = useState({})
    const navigate = useNavigate()

    const deleteSnack = () => {
        axios
          .delete(`${API}/snacks/${id}`)
          .then(
            () => {
              navigate(`/snacks`);
            },
            (error) => console.error(error)
          )
          .catch((c) => console.warn("catch", c));
      };
    
      const handleDelete = () => {
        deleteSnack();
      };

    useEffect(() => {
        axios
        .get(`${API}/snacks/${id}`)
        .then((res) => {
            setSnack(res.data)
            SetSnackHealth(res.data.is_healthy)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [id]);
console.log(snack)
    return (
<div className="Show">

        <div style={{display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}  >
      <p>
        {snack.is_healthy ? 
           "This snack is healthy"
         : 
         "This snack is not healthy"
        }
      </p>
           <p>
        {snack.is_healthy ? 
          <img src={heartSolid}></img>
         : (
          <img src={heartOutline}></img>
        )}

      </p>
           <p>{snack.name}</p>
           <img src={snack.image} alt="snack"></img>
           <p>protein: {snack.protein}</p>
           <p>fiber: {snack.fiber}</p>
           <p>sugar: {snack.added_sugar}</p> 
           <div className="buttons">
          <>
            <Link to={`/snacks`}>
              <button>Back</button>
            </Link>
          </>
          <>
            <Link to={`/snacks/${snack.id}/edit`}>
              <button>Edit</button>
            </Link>
          </>
          <>
            <button onClick={handleDelete}>Delete</button>
          </>
        </div>
        </div>
        </div>
    )
}

export default SnackDetails;