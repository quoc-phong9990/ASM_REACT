
import Joi from 'joi';
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import IProduct from "../../interface/IProduct";
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const productSchema = Joi.object({
    name: Joi.string().required().min(3),
    price: Joi.number().required(),
    image: Joi.string().required().min(3),
    description: Joi.string().required(),
});

function ProductAdd() {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: joiResolver(productSchema),
        defaultValues: {
            name: "",
            price: 0, // Provide a default value for price
            image: "",
            description: ""
        }
    });
    const { mutate } = useMutation({
        mutationFn: async (product: IProduct) => {
            return await axios.post(`http://localhost:3000/products`, product);

        }
    })
    const onSubmit = (data: IProduct) => {
        mutate(data);
        navigate("/admin/list")
    }

    return (
        <>
            <h2>ADD PRODUCTS</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Name Products</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" {...register("name")} />
                    {errors?.name?.message && <span className="text-danger">{errors?.name.message}</span>}
                </div>

                <div className="form-group">
                    <label>Image</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter image" {...register("image")} />
                    {errors?.image?.message && <span className="text-danger">{errors?.image.message}</span>}
                </div>

                <div className="form-group">
                    <label>Price</label>
                    <input type="number" className="form-control" id="exampleInputPrice" placeholder="Enter price" {...register("price")} />
                    {errors?.price?.message && <span className="text-danger">{errors?.price.message}</span>}
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" id="description" cols={30} rows={10} placeholder="Description" {...register("description")} />
                    {errors?.description?.message && <span className="text-danger">{errors?.description.message}</span>}
                </div>

                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label">Check me out</label>
                </div>

                <button type="submit" className="btn btn-primary">ADD PRODUCT</button>
            </form>
        </>
    );
}

export default ProductAdd;
