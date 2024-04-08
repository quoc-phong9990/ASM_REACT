import axios from "axios"
import IProduct from "../../interface/IProduct"
import { Link } from "react-router-dom"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"


function ProductList() {
    const queryClient = useQueryClient()
    // GET PRODUCTS
    const { data } = useQuery({
        queryKey: ["PRODUCT_KEY"],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/products`)
            return data
        }
    })
    // DELETE
    const { mutate } = useMutation({
        mutationFn: async (id: number | string) => {
            window.confirm("do you want to DELETE") &&
                (await axios.delete(`http://localhost:3000/products/${id}`))
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["PRODUCT_KEY"]
            })
        }
    })
    return (
        <>
            <div className="container">
                <div className="w-5 mt-4">
                    <h1>Quản lý sản phẩm </h1>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Ảnh</th>
                                <th>Tên</th>
                                <th>Giá</th>
                                <th>Mô tả</th>
                                <th>Thao Tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((product: IProduct, index: number) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <img src={product.image} />
                                    </td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                    <td className="d-grid gap-2">
                                        <Link to={`/admin/edit/${product.id}`} className="btn btn-primary">Edit</Link>
                                        <button  className="btn btn-danger"  onClick={() => mutate(product.id!)}> Delete</button>
                                    </td>


                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>





        </>



    )
}
export default ProductList


