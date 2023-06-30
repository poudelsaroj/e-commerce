import { useState } from "react";
import "./SingleProduct.scss";
import Prod from "../../assets/products/lap.webp";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { FaCartPlus } from "react-icons/fa";
const SingleProduct = () => {
  const [quantity, setQuantity]=useState(1);
  const increment = ()=>{
    setQuantity ((prevState)=>prevState +1)
  }
  const decrement = ()=>{
    setQuantity ((prevState)=>{
      if (prevState==1) return 1
      return (prevState-1)

      }
    )
  }
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={Prod} alt="" />
          </div>
          <div className="right">
            <span className="name">Product name</span>
            <span className="price">Price</span>
            <span className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              officia pariatur quia tempore natus sed! Facilis quis obcaecati
              error magnam itaque dignissimos sequi, architecto odio culpa
              nesciunt veritatis in quisquam.
            </span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button>
                <FaCartPlus size={20} />
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <RelatedProducts />
      </div>
    </div>
  );
};

export default SingleProduct;
