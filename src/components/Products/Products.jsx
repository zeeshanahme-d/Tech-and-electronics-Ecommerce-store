/* eslint-disable react/prop-types */
//Components
import "./products.scss";
//Scss
import Product from "./Product/Product";

const Products = ({ innerPage,headingText }) => {
    return (
        <div className="products-container">
            {!innerPage && <div className="sec-heading">{headingText}</div>}
            
            <div className="products">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
    );
};

export default Products;

{/* {!innerPage && <div className="sec-heading">{headingText}</div>}
        <div className={`products ${innerPage ? "innerPage" : ""}`}>
            {products?.data?.map((item) => (
                <Product
                    key={item.id}
                    id={item.id}
                    data={item.attributes}
                />
            ))}
        </div> */}