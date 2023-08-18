import React, { useContext } from 'react'
import './Cart.css'
import CartItem from '../CartItem/CartItem'
import Modal from '../UI/Modal/Modal'
import CartContext from '../../Store/Cart-context/Cart-Context'

const Cart = (props) => {
    const cartCtx = useContext(CartContext)
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {

    }

    const cartItemAddHandler = item => {
        
    }

    const cartitems = <ul className='cart-items'>{cartCtx.items.map(item =>
          <CartItem key= {item.id} 
          name= {item.name}
           amount= {item.amount} 
           price= {item.price} 
           onRemove={cartItemRemoveHandler} onAdd={cartItemAddHandler} />)}</ul> 

  return (
    <Modal onClose={props.onClose}>{cartitems}
    <div className='total'>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
    </div>
    <div className='actions'>
        <button className='button--alt' onClick={props.onClose}>Close</button>
        {hasItems && <button className='button-order'>Order</button>}
    </div>
    </Modal>
  )
}

export default Cart