import { useRef, useState } from 'react'
import React from 'react'
import './Checkout.styled.js'
import {Label, Control, Actions, Input, Button, Form} from './Checkout.styled.js'



const isEmpty = value => value.trim() === ''
const isFiveChars = value => value.trim().length === 5;




const Checkout = (props) => {
const [formInputsValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
})
const nameInput = useRef();
const streetInput = useRef();
const postalInput = useRef();
const cityInput = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInput.current.value;
        const enteredStreet = streetInput.current.value;
        const enteredPostal = postalInput.current.value;
        const enteredCity = cityInput.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalIsValid = isFiveChars(enteredPostal);
    
        setFormInputValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalIsValid,
         })

        const formIsValid = enteredCityIsValid &&
         enteredNameIsValid &&
         enteredPostalIsValid && 
         enteredStreetIsValid;

       


         if (formIsValid) {
            return;
         }
        
    }


  return <Form onSubmit={confirmHandler}>
    <Control >
    <Label htmlFor='name'>Your Name</Label>
    <Input type='text' id='name' ref={nameInput} />
    {!formInputsValidity.name && <p>please enter a valid name!</p>}
    </Control>
    <Control >
    <Label htmlFor='street'>Street</Label>
    <Input type='text' id='street' ref={streetInput} />
    {!formInputsValidity.street && <p>please enter a valid street!</p>}
    </Control>
    <Control>
    <Label htmlFor='postal'>Postal Code</Label>
    <Input type='text' id='postal' ref={postalInput} />
    {!formInputsValidity.postalCode && <p>please enter a valid Postal Code!</p>}
    </Control>
    <Control>
    <Label  htmlFor='city'>City</Label>
    <Input  type='text' id='city' ref={cityInput} />
    {!formInputsValidity.city && <p>please enter a valid City!</p>}
    </Control>
    <Actions >
    <Button type='button' onClick={props.onCancel} >Cancel</Button>
    <Button onClick={confirmHandler}>Confirm</Button>
    </Actions>
  </Form>
    
  
}

export default Checkout