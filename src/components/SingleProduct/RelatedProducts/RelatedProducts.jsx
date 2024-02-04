//Custom Hook
// import useFetch from "../../../hooks/useFetch";
//Component
import Products from "../../Products/Products";

const RelatedProducts = () => {


    return (
        <div className="related-products">
            <Products headingText="Related Products" products={"data"} />
        </div>
    );
};

export default RelatedProducts;
