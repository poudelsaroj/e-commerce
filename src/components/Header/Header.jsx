import "./Header.scss";
import { useEffect,useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {TbSearch} from "react-icons/tb"
import {CgShoppingCart} from "react-icons/cg"
import { AiOutlineHeart} from "react-icons/ai"
import Search from "./Search/Search"
import Cart from "../Cart/Cart"
import {Context} from "../../utils/context"
import { Navigate } from "react-router-dom";
const Header = () => {
    const navigate =useNavigate()
    const[scrolled,setScolled] =useState(false)
    const[showCart,setShowCart] =useState(false)
    const[showSearch,setShowSearch] =useState(false)
    const handlescroll=()=>{
        const offset = window.scrollY
        if (offset>200){
           setScolled(true)
        }
        else{
            setScolled(false)
        }
    }
    useEffect(()=>{
window.addEventListener("scroll",handlescroll)
    },[])
    return <>

    <header className={`main-header ${scrolled ? 'sticky-header':''}`}>
 
          <div className="header-content">
            <ul className="left">
                <li onClick={()=>navigate('/')}>Home</li>
                <li>About</li>
                <li onClick={()=>navigate('/category')}>Categories</li>
            </ul>
            <div className="center" onClick={()=>navigate('/')}>Poudel Store</div>
            <div className="right">
                <TbSearch onClick={()=>setShowSearch(true)} />
                <AiOutlineHeart/>
                <span className="Cart-icon" onClick={()=>setShowCart(true)}>
                    <CgShoppingCart/>
                    <span>5</span>
                </span>
            </div>


          </div>

    </header>
    {showCart && <Cart setShowCart={setShowCart}/>}
    {showSearch && <Search setShowSearch={setShowSearch}/>}
    
    </>
};

export default Header;
