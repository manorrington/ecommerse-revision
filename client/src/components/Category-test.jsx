import React, { useState } from "react";
import Categories from "./Categories-text";

import "../sass/categorytest.styles.scss";

const CategoryTest = () => {

    const[data, setData] = useState(Categories);

    //Filter for category
    const filterResult = (catItem) => {
        const result = Categories.filter((curDate) => {
            return curDate.id === catItem;
        });
        setData(result);
    }

  return (
    <>
      <div className="container">
          <div className="row">
              <div className="col">
                  <h1 className='title'>Filter by Category</h1>
              </div>
          </div>
          <div className="row">
              <div className="col">
                  <button className='btn' onClick={() => setData(Categories)}>All</button>
                  <button className='btn' onClick={() => filterResult(1)}>Men</button>
                  <button className='btn' onClick={() => filterResult(2)}>Women</button>
                  <button className='btn' onClick={() => filterResult(3)}>Kids</button>
              </div>
              <div className="col">
                    <div className="cards">
                        {data.map((values) => {
                            const{id, title, price, image} = values;
                            return (
                                <>
                                    <div className="card" key={id}>
                                        <div className="card-header">
                                            <img src={image} alt={title} />
                                        </div>
                                        <div className="card-body">
                                            <h2 className='titleProduct'>{title}</h2>
                                            <span className="price">${price}</span>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                        
                    </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default CategoryTest;
