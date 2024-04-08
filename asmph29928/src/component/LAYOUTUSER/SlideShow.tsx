import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const SlideShow = () => {
    const [user, setUser] = useState(sessionStorage.getItem('user'))
    return (
        <div>
            <nav className="navbar fixed-top" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold" href="#">Coding Yaar</a>
                    <div className="header">
                    <img src="/image/HotCoffee.png" alt="" />
                    <div className="link">
                        <span className="text-blue">Hello :{user}</span>
                        <Link to={`/Cart`} className=""><img src="https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA=" alt="" width={30} height={30} /></Link>
                        <a href="">Home</a>
                        <a href="/admin">Admin</a>
                        <a href="/show">Page_Product</a>
                        <div>
                        </div>
                    </div>
                </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav5" aria-controls="navbarNav5" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav5">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="hero-section">
            </div>
        </div>
    )
}

export default SlideShow
