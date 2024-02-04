//Modules
// import { useContext, useState } from "react";
// import { Context } from "../../utils/context";
// import { useParams } from "react-router-dom";
//Custom Hook
// import useFetch from "../../hooks/useFetch";
//Component
import RelatedProducts from "./RelatedProducts/RelatedProducts";
//Icons
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
//Scss
import "./SingleProduct.scss";


function SingleProduct() {
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">

          <div className="left">
            <img src="/products/earbuds-prod-1.webp" alt="" />
          </div>

          <div className="right">
            <span className="name">Product name</span>
            <span className="price">Price</span>
            <span className="desc">Product description</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span>-</span>
                <span>5</span>
                <span>+</span>
              </div>

              <button className="add-to-cart-button">
                <FaCartPlus size={20} />
                Add to Cart
              </button>
            </div>

            <span className="divider" />

            <div className="info-item">
              <span className="text-bold">
                Category:
                <span>Headphone</span>
              </span>
            </div>

            <div className="info-item">
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>

          </div>

        </div>
        <RelatedProducts/>
      </div>
    </div>
  )
}

export default SingleProduct;