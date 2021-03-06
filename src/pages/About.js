import { Route, useNavigate, Routes } from "react-router-dom";

//Nested route
import Offers from "./Offers"

const About = () => {
    const navigate = useNavigate();

    return ( 
        <div className="content">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia voluptatibus perspiciatis aut laboriosam ipsum, repellat corporis rem officia ex tenetur accusamus, expedita doloribus molestias at qui iste, nostrum animi est! Atque nihil placeat ea libero quas quia minima ut totam? Consequuntur nam dolor nesciunt accusantium, maiores in vitae nostrum accusamus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur itaque eius placeat a quo distinctio. Vitae placeat expedita sunt ab, accusamus, at iusto dolorum, suscipit nemo deserunt blanditiis praesentium?</p>
            <Routes>
                <Route path="offers" element={<Offers />}/>
            </Routes>
            
            <button className="right-btn" onClick={() => navigate("/products")}>View Products</button>
        </div>
     );
}
 
export default About;