import React from 'react'
import './HeaderCartButton.css'
import CartIcon from '../Cart/CartIcon'
import { useContext } from 'react'
import CartContext from '../../Store/Cart-context/Cart-Context'

const HeaderCartButton = (props) => {
 const cartCtx =  useContext(CartContext)
 const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
  return currNumber + item.amount;
 }, 0);
  return (
    <button className='button' onClick={props.onClick}>
        <span className='icon'>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className='badge'>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton