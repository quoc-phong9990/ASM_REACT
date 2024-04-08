import { Route, Router, Routes } from "react-router-dom";
import ProductList from "./component/PRODUCT/ProductList";
import ProductAdd from "./component/PRODUCT/ProductAdd";
import ProductEdit from "./component/ProductEdit";
import './App.css'
import Home from "./component/LAYOUTUSER/Home";
import Layoutadmin from "./component/ADMIN/LayoutAdmin";
import ProductDetail from "./component/LAYOUTUSER/ProductDetail";
import Sigup from "./component/Sigup";
import Signin from "./component/Signin";
import Cart from "./component/LAYOUTUSER/Cart";
import Checkout from "./component/LAYOUTUSER/Checkout";
import Show from "./component/PRODUCT/ShowProducts";
import SlideShow from "./component/LAYOUTUSER/SlideShow";



function App() {


    return (
        <>

            <Routes >
                <Route path="home" element={<Home />} />
                <Route path="detail/:id" element={<ProductDetail />} />
                <Route path="signup" element={<Sigup />} />
                <Route path="signin" element={<Signin />} />

                <Route path="admin" element={<Layoutadmin />}>
                    <Route path="list" element={<ProductList />} />
                    <Route path="add" element={<ProductAdd />} />
                    <Route path="edit/:id" element={<ProductEdit />} />
                </Route>

                <Route path="cart" element={<Cart />} />

                <Route path="checkout" element={<Checkout />} />
                <Route path="show" element={<Show />} />
        


            </Routes>
        </>
    );
}

export default App;
