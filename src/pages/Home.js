import banner from "../images/banner.jpg";
import banner2 from "../images/banner2.jpg";
import banner3 from "../images/banner3.jpg";

const Home = () => {
    return ( 
        <div className="content">
            
            <div className="grid">
                <img id="banner" className="banner" src={banner} alt="site banner" />
                <img id="banner" className="banner2" src={banner2} alt="site banner" />
                <img id="banner3" className="banner3" src={banner3} alt="site banner" />
                <h2 id="banner-text">Quality clothing at affordable prices...</h2>
            </div>
        </div>
     );
}
 
export default Home;