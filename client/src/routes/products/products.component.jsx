import '../../components/product-card/product-card.styles.scss';

import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";

function Product() {
  const [productList, setProductList] = useState([]);
  const endpoint = 'https://dg1clcdun2.execute-api.us-east-1.amazonaws.com/dev/products'
  useEffect(() => {
    Axios.get(endpoint).then((res) => {
      setProductList(res.data);
    });
  });

  return (
    <div className="product-card-container">
      {/* <p>Product Page</p> */}
      {productList.map((val) => {
        return (
          <div className='footer'>
            <img src={val.img} alt='test'/> 
            <h3 className='name'>Title {val.title}</h3>
            <h3 className='price'>Artist {val.artist}</h3>
            <h3>Price {val.price}</h3>
            
          </div>
        );
      })}
    </div>
  );
}

export default Product;