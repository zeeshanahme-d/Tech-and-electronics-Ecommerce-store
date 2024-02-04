
//Scss
import "./banner.scss";



const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>Convallis interdum purus adipiscing dis parturient
                        posuere ac a quam a eleifend montes partueient posuere curae tempor
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2"> Shope Now</div>
                    </div>
                </div>
                <div>
                <img className="banner-img" src="./banner-img.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
