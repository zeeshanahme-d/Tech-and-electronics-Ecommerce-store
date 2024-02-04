//Modules
// import { useNavigate } from "react-router-dom";
//Scss
import "./product.scss";

const Product = () => {

    // const navigate = useNavigate();

    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src="/products/earbuds-prod-1.webp" alt="" />
            </div>
            <div className="prod-details">
                <span className="name">Title</span>
                <span className="price">&#8377;200</span>
            </div> 
            {/* <div className="thumbnail">
                <img
                    src={
                        process.env.REACT_APP_STRIPE_APP_DEV_URL +
                        data.image.data[0].attributes.url
                    }
                />
            </div>
            <div className="prod-details">
                <span className="name">{data.title}</span>
                <span className="price">&#8377;{data.price}</span>
            </div> */}
        </div>
    );
};

export default Product;
