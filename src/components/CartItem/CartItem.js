import './CartItem.css';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className='cart-item--2'>
      <div>
        <h2>{props.name}</h2>
        <div className='summary--2'>
          <span className='price--2'>{price}</span>
          <span className='amount--2'>x {props.amount}</span>
        </div>
      </div>
      <div className='actions--2'>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
