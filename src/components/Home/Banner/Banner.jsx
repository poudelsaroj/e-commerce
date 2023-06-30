import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/laptop.jpg";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, velit! Explicabo dicta aliquid illo itaque quaerat culpa provident dolore distinctio! Animi neque quas ad error dolores distinctio a eius maxime?
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} />
            </div>
        </div>
    );
};

export default Banner;