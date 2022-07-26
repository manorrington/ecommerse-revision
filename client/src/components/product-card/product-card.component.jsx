import '../../sass/product-card.styles.scss';

import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";

function ProductCard() {
  const [productList, setProductList] = useState([]);
  const endpoint = 'https://dg1clcdun2.execute-api.us-east-1.amazonaws.com/dev/products'
  useEffect(() => {
    Axios.get(endpoint).then((res) => {
      setProductList(res.data);
    });
  });

    //Filter for category
    const filterResult = (catItem) => {
        const result = [].filter((curDate) => {
            return curDate.id === catItem;
        });
        setProductList(result);
    }

  return (
    <>    
    <div className="product-card-container">
      {productList.map((val) => {
        return (
          <div className='footer'>
            <img src={val.img} alt='test'/> 
            <h3 className='name'>{val.title}</h3>
            <h3 className='price'>{val.artist}</h3>
            <h3>{val.price}</h3>
            
          </div>
        );
      })}
    </div>

    <div className="filtercontainer">
          <div className="row">
              <div className="col">
              </div>
          </div>
          <div className="row">
              <div className="col">
                  <button className='btn' onClick={() => setProductList([])}>All</button>
                  <button className='btn' onClick={() => filterResult(1)}>Genre</button>
                  <button className='btn' onClick={() => filterResult(2)}>Highest to Lowest</button>
                  <button className='btn' onClick={() => filterResult(3)}>Lowest to Highest</button>
              </div>
            </div>
            </div>
    </>
  );
}

export default ProductCard;