import { MdClose } from "react-icons/md";
import Prod from "../../../assets/products/lap.webp";
import "./Search.scss";
const Search = ({ setShowSearch }) => {
  return (
    <div className="search-modal">
      Search
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search for product" />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          <div className="search-result-item">
            <div className="image-container">
              <img src={Prod} alt="" />
            </div>
            <div className="prod-details">
              <span className="name">Product name</span>
              <span className="desc">Product description</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
