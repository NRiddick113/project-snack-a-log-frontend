import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function SnackDetails(){
    const { id } = useParams();
    const [snack, setSnack] = useState({});
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
        })
        .catch((error) => {
            console.log(error)
        })
    }, [id]);

    return (
        <div>
            {/* {snack.is_healthy ? <p>This snack is healthy.</p> : <p>This snack is not healthy.</p>}
            {snack.is_healthy ?  <img src="./assets/heart-solid.png"></img> : <img src="./assets/heart-regular.png"></img>} */}
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
    )
}

export default SnackDetails;