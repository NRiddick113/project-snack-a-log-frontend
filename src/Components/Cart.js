import { useState } from 'react';

function Cart ({snack}) {
    const [cart, setCart]= useState([])

    function updateCart(snack) {
        setCart([...cart, snack ])
      }

      function removeSnack(snackID) {
        const filteredSnackArray = cart.filter((snack) => snack.id !== snackID);
        setCart(filteredSnackArray);
      }

      const total = cart.reduce((acc,bird)=> acc + bird.amount, 0)

    return (
        <div>
            <h2>Cart</h2>
          <h4>Total: ${total}</h4>
      <ol>
        {cart.map((snacks) =>{
            return(
                <div>
                        <li key={snacks.id}>
                        <h6>{snacks.name} ${snacks.amount}</h6>
                        <button className="button" onClick={() => removeSnack(snacks.id)}>Delete snack</button>
                        </li>
                </div>
            )
        })}
      </ol>
        </div>
    );
};

export default Cart;