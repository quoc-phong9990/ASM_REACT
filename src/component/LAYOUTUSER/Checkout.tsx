import React from 'react'
import { useShoppingContext } from '../CONTEXT/ShoppingCart';
import Cartitem from './Cartitem';
import { Link, useNavigate } from 'react-router-dom';
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import Icheckout from '../../interface/Icheckout';


const productSchema = Joi.object({
  name: Joi.string().required().min(3),
  email: Joi.string().required().pattern(/^\S+@\S+\.\S+$/),
  address: Joi.string().required().min(3),
  cty: Joi.string().required().min(3),
  state: Joi.string().required().min(3),
  singlecode: Joi.number().required(),



});

const Checkout = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: joiResolver(productSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      cty: "",
      state: "",
      singlecode: 0,

    }
  });
  const { cartItems, cartQty, totolPrice } = useShoppingContext()

  const { mutate } = useMutation({
    mutationFn: async (checkout: Icheckout) => {
      return await axios.post(`http://localhost:3000/checkouts`, checkout);

    }
  })
  const onSubmit = (data: Icheckout) => {
    mutate(data);

    alert("đặt hàng thành công")
    navigate("/home")
  }
  return (
    <div className="row">
      <div className="col-75">
        <div className="containe r">
          <form onSubmit={handleSubmit(onSubmit)} action="/action_page.php">
            <div className="row">
              <div className="checkout col-50">
                <h3>Billing Address</h3>

                <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
                <input type="text" id="fname" placeholder="John M. Doe"  {...register("name")} />
                {errors?.name?.message && <span className="text-danger">{errors?.name.message}</span>} <br />

                <div className='row_email'>
                  <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label> <br />
                  <input type="email" id="email" placeholder="john@example.com" {...register("email", {

                  })} /> <br />
                  {errors?.email?.message && <span className="text-danger">{errors?.email.message}</span>} <br />

                </div>


                <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
                <input type="text" id="adr" placeholder="542 W. 15th Street"{...register("address")} />
                {errors?.address?.message && <span className="text-danger">{errors?.address.message}</span>} <br />

             <div className='rowcty'>
             <label htmlFor="city"><i className="fa fa-institution"></i> City</label> <br />
                <select id="" {...register("cty")}>
                  <option value="">Thành Phố Hồ Chí Minh</option>
                  <option value="">Hà Nội</option>
                  <option value="">Đà Nẵng</option>
                  <option value="">Hà Giang</option>
                </select>
                {errors?.cty?.message && <span className="text-danger">{errors?.cty.message}</span>}

             </div>

                <div className="row">
                  <div className="rowcty">
                    <label htmlFor="state">State</label> <br />
                    <select id="" {...register("state")}>
                      <option value="">Chọn hình thức thanh toán</option>
                      <option value="">Thanh toán khi nhận hàng</option>
                      <option value="">Thanh toán qua thẻ ATM</option>
                      <option value="">Mua không trả</option>
                    </select>
                    {errors?.state?.message && <span className="text-danger">{errors?.state.message}</span>}
                  </div>
                  <div className="col-50">
                    <label htmlFor="zip">SingerCode</label>
                    <input type="text" id="zip" placeholder="10001" {...register("singlecode")} />
                    {errors?.singlecode?.message && <span className="text-danger">{errors?.singlecode.message}</span>}
                  </div>
                </div>
              </div>

              <div className="col-50">
                <h3>Payment</h3>
                <label htmlFor="fname">Accepted Cards</label>

                <div className="container" >

                  {cartItems.map(item => (
                    <Cartitem key={item.id} {...item} />
                  ))}

                  {/* // <p>Total <span className="price" style={{ color: 'black' }}><b>$30</b></span></p> */}
                  <div>
                    <span> Số lượng sản phẩm:{cartQty}</span><br />
                    <span className='text-danger text-lg td'>Tổng Số tiền Thanh toán:   {totolPrice}$</span>
                  </div>
                </div>
              </div>
            </div>
            <label>
              <input type="checkbox" defaultChecked name="sameadr" /> Shipping address same as billing
            </label>
            <input type="submit" value="Continue to checkout" className="btn" />
          </form>
        </div>
      </div>
      <div className="col-25">


      </div>
    </div>
  );
}

export default Checkout