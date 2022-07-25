import React from "react";
import { Carousel } from "react-bootstrap";

function Slider() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0287/4323/7725/files/Offpsring_GH_2000x500_a019f71b-b6b9-43d8-858b-b1d1d8fb4955_1864x466.jpg?v=1653076894"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0287/4323/7725/files/REM-CT_BANNER-TSOV-2000x500_copy_1864x466.jpg?v=1656447710"
            alt="Second slide"
          />
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0287/4323/7725/files/UL-0110-Ella-Mai-Time_-Change_-Ready-3LP_r2STORE-DESK-STREET_1864x466.png?v=1650580707"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
