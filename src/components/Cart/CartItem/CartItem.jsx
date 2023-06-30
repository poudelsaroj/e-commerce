import "./CartItem.scss";
import Prod from "../../../assets/products/lap.webp"
import { MdClose } from "react-icons/md";
const CartItem = () => {
    return <div className="cart-products">
        <div className="cart-product">
            <div className="img-container">
                <img src={Prod} alt=""/>
            </div>
            <div className="prod-details">
                <span className="name">Product name</span>
                <MdClose className="svg"/>
                <div className="quantity-buttons">
                <span>-</span>
                <span>5</span>
                <span>+</span>
              </div>
              <div className="text">
                <span>3</span>
                <span>x</span>
                <span>$123</span>
              </div>
            </div>
        </div>
    </div>;
};

export default CartItem;
