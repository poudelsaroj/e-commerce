import { useNavigate } from "react-router-dom";
import "./Products.scss";
import Product from "./Product/Product";
const Products = ({innerPage,headingText}) => {
    const navigate = useNavigate()
    return <div className="products-container">
        {!innerPage && <div className="sec-heading">{headingText}</div>}
        <div className="products" onClick={()=> navigate('/product')}>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            
        </div>
    </div>;
};

export default Products;
