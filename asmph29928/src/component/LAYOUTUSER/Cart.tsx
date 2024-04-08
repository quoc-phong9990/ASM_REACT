import React from 'react'
import { useShoppingContext } from '../CONTEXT/ShoppingCart'
import Cartitem from './Cartitem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cartItems, cartQty, totolPrice, clearCart } = useShoppingContext()

    return (
        <div>
            <section className="h-100 h-custom background-color: #eee;">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card">
                                <div className="card-body p-4">

                                    <div className="row">

                                        <div className="col-lg-7">
                                            <h5 className="mb-3">
                                                <a href="#!" className="text-body">
                                                   <button className='btn btn-primary'> <Link className='text-white' to={"/home"} >Home</Link>  </button>
                                                  <button className='btn btn-success'> <Link className='text-white' to={"/show"}> <i className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</Link></button>  
                                                </a>
                                            </h5>
                                            <hr />
                                            <table className='table'>
                                                <thead>
                                                    <tr>
                                                        <th scope="col ml-9 ">Name</th>
                                                        <th scope="col ml-9">Quantity</th>
                                                        <th scope="col ml-9">Price</th>
                                                        <th scope="col ml-9">image</th>
                                                        <th scope="col ml-9">Total</th>
                                                        <th scope="col ml-9">Actions</th>
                                                      
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {cartItems.map(item => (
                                                        <Cartitem key={item.id} {...item} />
                                                    ))}
                                                </tbody>
                                            </table>
                                            <div>


                                                <span> Số lượng sản phẩm:{cartQty}</span><br />
                                                <span className='text-danger text-lg'>{totolPrice}$$$</span>  <Link to={"/checkout"}><button type="button" className="btn btn-success">ChectOut</button></Link>
                                                <button className="btn btn-danger" onClick={clearCart}>Delete all cart</button>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            {/* Card details section */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cart
