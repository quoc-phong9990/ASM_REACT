import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layoutadmin = () => {
  return (
    <div>

    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
               
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/home">Trang chủ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/admin/list">List_Products</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" to="/admin/add">Add_Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/admin/user">user</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <main className="col-10">
            <Outlet />
        </main>
 
    </>

</div>
  )
}

export default Layoutadmin
