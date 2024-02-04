//Modules
// import { useNavigate } from "react-router-dom";
//Scss
import "./category.scss";

const Category = () => {
    // const navigate = useNavigate();
    return (
        <div className="shop-by-category">
            <div className="categories">
                <div className="category">
                    <img src="/category/cat-1.jpg" alt="" />
                </div>
                <div className="category">
                    <img src="/category/cat-1.jpg" alt="" />
                </div>
                <div className="category">
                    <img src="/category/cat-1.jpg" alt="" />
                </div>
                <div className="category">
                    <img src="/category/cat-1.jpg" alt="" />
                </div>
                {/* {categories?.data?.map((item) => (
                    <div
                        key={item.id}
                        className="category"
                        onClick={() => navigate(`/category/${item.id}`)}
                    >
                        <img
                            src={
                                process.env.REACT_APP_STRIPE_APP_DEV_URL +
                                item.attributes.img.data.attributes.url
                            }
                        />
                    </div>
                ))} */}
            </div>
        </div>
    );
};

export default Category;