import React from 'react'

const Cart = ({isOpen, onClose}) => {

  if (!isOpen) return null;

  return (
    <div>Cart</div>
  )
}

export default Cart