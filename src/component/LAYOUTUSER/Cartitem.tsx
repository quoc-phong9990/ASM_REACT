import React from 'react'
import { useShoppingContext } from '../CONTEXT/ShoppingCart'

type CartItemProps = {
    id: number,
    name: string,
    price: number,
    image: string,
    qty: number,
}

const Cartitem = ({ id, name, price, qty, image }: CartItemProps) => {
    const { increaseQty, decreaseQty, removeCartitem } = useShoppingContext()

    return (
        <tr 
        className='listcart'>
            <td scope="row ml-9">{name}</td>    
            <td scope="row ml-9">{qty}</td>
            <td scope="row ml-9">{price}$</td>
            <td scope="row ml-9"><img src={image} alt="" /></td>
            <td className='text-danger td'>{qty * price}$</td>
            <td className='hi '>
            <button className='btn btn-primary' type='button' onClick={() => decreaseQty(id)}>-</button>
                <button className='btn btn-primary' type='button' onClick={() => increaseQty(id)}>+</button>
              
               <button className='btn btn-danger' type='button' onClick={() => removeCartitem(id)}>Delete</button>
            </td>


     
        </tr>










    )
}

export default Cartitem
