import styled, { css } from 'styled-components'

export const Form = styled.form`
margin: 1rem 0;
  height: 19rem;
  overflow: auto;

`



export const Control = styled.div`
  margin-bottom: 0.5rem;

`

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.25rem;
  display: block;
  color: #ca3e51;
`




export const Input = styled.input`
font: inherit;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 20rem;
  max-width: 100%;

`
  
export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`


export const Button = styled.button`
 font: inherit;
  color: #5a1a01;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-radius: 25px;
  padding: 0.5rem 2rem;
  &:hover {
    background-color: #ffe6dc;

  }
  &:active {
    background-color: #ffe6dc;

  }
`


// .actions .submit {
//   border: 1px solid #5a1a01;
//   background-color: #5a1a01;
//   color: white;
// }

// .actions .submit:hover,
// .actions .submit:active {
//   background-color: #7a2706;
// }

// export const Invalid = styled.label`
//    color: #ca3e51;

// `

// export const InvalidL = styled.ino

// .invalid label {
//   color: #ca3e51;
// }

// .invalid input {
//   border-color: #aa0b20;
//   background-color: #ffeff1;
// }
