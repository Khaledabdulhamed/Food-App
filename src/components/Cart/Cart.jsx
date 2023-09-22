import React, { useContext, useState } from 'react'
import './Cart.css'
import CartItem from '../CartItem/CartItem'
import Modal from '../UI/Modal/Modal'
import CartContext from '../../Store/Cart-context/Cart-Context'
import Checkout from './Checkout'
const Cart = (props) => {
  const [isCheckOut, setIsCheckOut] = useState(false)
    const cartCtx = useContext(CartContext)
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
      cartCtx.removeItem(id)
    }

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1})
    }

    const orderHandler= () => {
      setIsCheckOut(true)
    }

    const cartitems = <ul className='cart-items'>{cartCtx.items.map(item =>
          <CartItem key= {item.id} 
          name= {item.name}
           amount= {item.amount} 
           price= {item.price} 
           onRemove={cartItemRemoveHandler.bind(null, item.id)}
  onAdd={cartItemAddHandler.bind(null, item)} />)}</ul> 



  const modalActions = <div className='actions'>
  <button className='button--alt' onClick={props.onClose}>Close</button>
  {hasItems && <button className='button-order' onClick={orderHandler}>Order</button>}
</div>

  return (
    <Modal onClose={props.onClose}>{cartitems}
    <div className='total'>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
    </div>

    { isCheckOut && <Checkout onCancel={props.onClose} />}
    {!isCheckOut && modalActions}
    
    </Modal>
  )
}

export default Cart