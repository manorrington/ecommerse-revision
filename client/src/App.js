import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/products").then((res) => {
      setProductList(res.data);
    });
  });

  return (
    <div className="App">
      <p>hey</p>
      {productList.map((val) => {
        return (
          <div>
            <h3>Name: {val.name}</h3>
            <img src={val.img} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
