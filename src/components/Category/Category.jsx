
//Components
import Products from "../Products/Products";
//Scss
import "./category.scss"

const Category = () => {
    return (
        <div className="category-main-content">
           <div className="layout">
            <div className="category-title">Category Title</div>
            <Products innerPage={true}/>
           </div>
        </div>
    );
};

export default Category;
