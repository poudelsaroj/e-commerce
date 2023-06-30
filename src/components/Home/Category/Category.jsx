import { useNavigate, useNavigation } from "react-router-dom";
import "./Category.scss";
import cat1 from "../../../assets/category/cat-1.jpg"
const Category = () => {
    const Navigate =useNavigate()
    return <div className="shop-by-category">
        <div className="categories" onClick={()=> Navigate('/category')}>
            
            <div className="category">
                <img src={cat1} alt=""/>
            </div>
            <div className="category">
                <img src={cat1} alt=""/>
            </div>
            <div className="category">
                <img src={cat1} alt=""/>
            </div>
            <div className="category">
                <img src={cat1} alt=""/>
            </div>
        </div>
    </div>;
};

export default Category;
