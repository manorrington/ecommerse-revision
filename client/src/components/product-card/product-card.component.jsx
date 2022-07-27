import "../../sass/product-card.styles.scss";

import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";

function ProductCard() {
  const [productList, setProductList] = useState([]);
  const endpoint =
    "https://dg1clcdun2.execute-api.us-east-1.amazonaws.com/dev/products";
  useEffect(() => {
    Axios.get(endpoint).then((res) => {
      setProductList(res.data);
    });
  }, []);

  //Filter for category
  const filterLow = () => {
    Axios.get(
      "https://dg1clcdun2.execute-api.us-east-1.amazonaws.com/dev/low"
    ).then((res) => {
      setProductList(res.data);
    });
  };

  const filterHigh = () => {
    Axios.get(
      "https://dg1clcdun2.execute-api.us-east-1.amazonaws.com/dev/high"
    ).then((res) => {
      setProductList(res.data);
    });
  };

  const filterAll = () => {
    Axios.get(
      "https://dg1clcdun2.execute-api.us-east-1.amazonaws.com/dev/products"
    ).then((res) => {
      setProductList(res.data);
    });
  };

  const onChange = (x) => {
    if (x.target.value === "low") {
      filterLow();
    }
    if (x.target.value === "high") {
      filterHigh();
    }
    if (x.target.value === "normal") {
      filterAll();
    }
  };

  return(
    <>
  <div>
    <label for="price">pick</label>

    <select name="price" id="p" onChange={onChange}>
    <option value="all">Reset</option>
    <option value="high">High</option>
    <option value="low">Low</option>

    </select>
  </div>
    
      <div className="product-card-container">
        {productList.map((val) => {
          return (
            <div className="footer">
              <img src={val.img} alt="test" />
              <h3 className="name">{val.title}</h3>
              <h3 className="price">{val.artist}</h3>
              <h3>${val.price}</h3>
            </div>
          );
        })}
      </div>
  </>
  );
}

export default ProductCard;
