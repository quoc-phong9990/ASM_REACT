import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import IProduct from '../../interface/IProduct'
import { Link } from 'react-router-dom'
import Cartitem from './Cartitem'
import { useShoppingContext } from '../CONTEXT/ShoppingCart'
import { useState } from 'react'

const Home = () => {
    const [user, setUser] = useState(sessionStorage.getItem('user'))
    const queryClient = useQueryClient()
    const { addcartItem } = useShoppingContext();
    // GET PRODUCTS
    const { data } = useQuery({
        queryKey: ["PRODUCT_KEY"],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/products`)
            return data
        }
    })

    return (
        <div>
            <div className="homepage">
                <div className="header">
                    <div className='user'>
                        <img src="/image/HotCoffee.png" alt="" />
                        <span className="text-danger">Hello :{user}</span>
                    </div>
                    <div className="hero-section">
                    </div>
                    <div className="link">
                        <a href="">Home</a>
                        <a href="/admin">Admin</a>
                        <a href="/show">Page_Product</a>
                        <Link to={`/Cart`} className=""><img src="https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA=" alt="" width={30} height={30} /></Link>
                        <div>
                        </div>
                    </div>
                </div>

                <div className="banner">
                    <img src="/image/Head-section.png" alt="" />

                    <div className="bannermeo">
                        <div className="card">
                            <img src="/image/Avatar-cute-meo.jpg" alt="" />

                            <div className="head">meo1</div>
                        </div>
                        <div className="card">
                            <img src="/image/Avatar-cute-meo.jpg" alt="" />
                            <div className="head">meo2</div>
                        </div>
                        <div className="card">
                            <img src="/image/Avatar-cute-meo.jpg" alt="" />
                            <div className="head">meo3</div>
                        </div>
                        <div className="card">
                            <img src="/image/Avatar-cute-meo.jpg" alt="" />
                            <div className="head">meo4</div>
                        </div>
                        <div className="card">
                            <img src="/image/Avatar-cute-meo.jpg" alt="" />
                            <div className="head">meo5</div>
                        </div>
                    </div>
                </div>

                <div className="conten1">
                    <div className="right">
                        <h2>long established</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem Ipsum is that....</p>

                        <div className="remo">
                            <p>May 20th 2020</p>
                            <h4>Read more</h4>
                        </div>

                    </div>

                    <div className="left">
                        <img src="/image/image 1.png" alt="" width="500px" />
                    </div>

                </div>

                <div className="conten2 container-xl d-flex flex-wrap justify-content-between">
                    {data?.map((product: IProduct, index: number) => (
                        <div key={index} className='listhome col-md-3 mb-4'>
                            <p><img src={product.image} width={400} height={400} /></p>

                            <Link to={`/detail/${product.id}`}><h4>{product.name}</h4></Link>

                            <h5 className='text-danger'>{product.price} $</h5>
                            <p>{product.description}</p>
                            {/* <button    className="btn btn-sm btn-success" onClick={()=>addcartItem(product)}>  <i className="bi bi-cart" ></i> Add to cart</button> */}

                             <button className="btn btn-sm btn-success" onClick={() => addcartItem(product)}>  <i className="bi bi-cart" ></i> Add to cart</button>
                        </div>

                    ))}
                </div>


                <div className="content3">
                    <div className="right3">
                        <h1>What is Lorem Ipsum?</h1>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page
                            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                            distribution...
                        </p>

                        <div className="remo3">
                            <p>May 20th 2020</p>
                            <h4>Read more</h4>
                        </div>

                    </div>

                    <div className="left">
                        <img src="/image/image 7.png" alt="" width="600px" height="500px" />
                    </div>

                </div>

                <div className="nut">
                    <button>See more <img src="/image/Vector.png" alt="" /></button>

                </div>

                <p className="ke"></p>
                <div className="footer">
                    <h4>hotcoffee</h4>
                    {/* <P> 2020 copyright all rights reserved</P> */}
                    <div className="dh">
                        <img src="/image/instagram-fill 1.png" alt="" />
                        <img src="/image/Vector (1).png" alt="" />
                        <img src="/image/linkedin-box-fill 1.png" alt="" />
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Home
