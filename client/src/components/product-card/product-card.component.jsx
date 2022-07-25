import './product-card.styles.scss';

import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";

function Product() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/products").then((res) => {
      setProductList(res.data);
    });
  });

  return (
    <div className="product-card-container">
      {/* <p>Product Page</p> */}
      {productList.map((val) => {
        return (
          <div>
            <img src={val.img} alt='test'/> 
            <h3 className='name'>Title {val.title}</h3>
            <h3>Artist {val.artist}</h3>
            <h3>Price {val.price}</h3>
            
          </div>
        );
      })}
    </div>
  );
}

export default Product;