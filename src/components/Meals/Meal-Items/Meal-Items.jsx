import React from 'react'
import './Meal-Item.css'
import { useContext } from 'react';
import MealItemform from '../Meal-Item-form/Meal-Item-form';
import CartContext from '../../../Store/Cart-context/Cart-Context';

const MealItems = (props) => {
  const crtCtx = useContext(CartContext)
    const price = `$${props.price.toFixed(2)}`; //format the prices with two decimals

    const addToCartHandler = (amount) =>{
      crtCtx.addItem({
        id: props.id,
        name: props.name,
        price: props.price,
        amount: amount
      })
    }
  return ( <li className='meal'>
        <div>
         <h3>{props.name}</h3>
         <div className='description'>{props.description}</div>
         <div className='price'>{props.price}</div>
          </div>
        <div>
            <MealItemform onAddToCart={addToCartHandler} id={props.id}/>
        </div>
  </li>
  )
}

export default MealItems