import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import IProduct from '../../interface/IProduct'
import { useShoppingContext } from '../CONTEXT/ShoppingCart'

const Show = () => {
  const { addcartItem } = useShoppingContext();
  const { data } = useQuery({
    queryKey: ["PRODUCT_KEY"],
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:3000/products`)
      return data
    }
  })
  return (
    <div>
      <section className="background-color: #eee;">
        <div className="container py-5">
          <div className="row justify-content-center mb-3">
            <div className="col-md-12 col-xl-10">
              <div className="card shadow-0 border rounded-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mb-3">
            <div className="col-md-12 col-xl-10">
              <div className="card shadow-0 border rounded-3 text-center">
              <Link className="text-success no-underline" to={"/home"}><h2>Home</h2></Link>
                <div className="card-body">
                  <div className="row">
                  </div>
                </div>
              </div>
            </div>
          </div>
   
          <div className="row justify-content-center">
     
            <div className="col-md-12 col-xl-10">
              <div className="card shadow-0 border rounded-3">
      
                <div className="card-body">
          
                {data?.map((product: IProduct, index: number) => (
                  <div key={index} className="row">
                 
             
                      < div className = "col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0" >
                      <div className="bg-image hover-zoom ripple rounded ripple-surface">
                        <img src={product.image}
                          className="w-100" />
                        <a href="#!">
                          <div className="hover-overlay">
                            <div className="mask background-color: rgba(253, 253, 253, 0.15);"></div>
                          </div>
                        </a>
                      </div>
                    </div>
                  <div className="col-md-6 col-lg-6 col-xl-6">
                  <Link to={`/detail/${product.id}`}><h4>{product.name}</h4></Link>
                    <div className="d-flex flex-row">
                      <div className="text-danger mb-1 me-2">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <span className='text-danger custom-font'>{product.price} $</span>
                    </div>
                    <div className="mt-1 mb-0 text-muted small">
                      <span>100% cotton</span>
                      <span className="text-primary"> • </span>
                      <span>Light weight</span>
                      <span className="text-primary"> • </span>
                      <span>Best finish<br /></span>
                    </div>
                    <div className="mb-2 text-muted small">
                      <span>Unique design</span>
                      <span className="text-primary"> • </span>
                      <span>For women</span>
                      <span className="text-primary"> • </span>
                      <span>Casual<br /></span>
                    </div>
                    <p className="text-truncate mb-4 mb-md-0">
                     {product.description}
                    </p>
                  </div>
                  <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                    <div className="d-flex flex-row align-items-center mb-1">
                      <h4 className="mb-1 me-1 text-danger" >{product.price}$</h4>
                      <span className="text-danger"><s>$25.99</s></span>
                    </div>
                    <h6 className="text-success">Free shipping</h6>
                    <div className="d-flex flex-column mt-4">
                    {/* <Link to={`/cart`}> <button className="btn btn-primary btn-sm" type='button' onClick={() => addcartItem(product)}>  <i className="bi bi-cart" ></i> Add to cart</button></Link> */}

                      <Link to={`/cart`}>  <button  className="btn btn-primary btn-sm btn-block" type="button" onClick={() => addcartItem(product)}>Đặt Hàng Ngay Bây Giờ click</button> </Link>
                      <button className="btn btn-outline-primary btn-sm mt-2" type="button">
                        Add to wishlist
                      </button>
                    </div>
                  </div>


           
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </div>
      </section >
    </div >
  )
}

export default Show
