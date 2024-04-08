import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["PRODUCT_KEY", id],
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:3000/products/${id}`);
      return data;
    },
  });


  if (isLoading) {
    return <div>Loading...</div>;
  }


  if (isError) {
    return <div>Error fetching product details</div>;
  }


  return (
    <div className='hi'>
      <div className='hihi'>
        <div className='img'>
          <img src={data.image} width={400} alt={data.name} />
        </div>
        <div className='hihihi'>
          <h3>{data.name}</h3>
          <h5>Giá:</h5>
          <p className='text-danger'> {data.price} $$$</p>
          <h5>mô tả sản phẩm: </h5>
          <p>Description: {data.description}</p>

          <Link to={"/cart"}><button className='btn btn-success'>Mua ngay</button></Link>
        </div>
      </div>
    </div>

  );
};

export default ProductDetail;
