import { Route, useParams, Routes, useNavigate, Link } from "react-router-dom"

// nested routes
import Offers from "./Offers"

export default function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div className="content">
      <div className="product">
        <div className="image">
          <img src="https://via.placeholder.com/520x460" alt="" />
          <Link style={{color:"#fff"}} to="/offers"><button id="offers--btn">Offers</button></Link>
        </div>
        <div className="details">
          <h2>Product - {id}</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eaque repudiandae itaque dolorem nihil, voluptas corporis tempora provident optio harum modi inventore esse nostrum exercitationem magnam tempore odio laborum velit! Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi voluptate neque harum. Quam facere accusamus exercitationem in quidem mollitia eligendi porro eos voluptates iure incidunt, laudantium sed harum omnis quasi?</p>
        </div>
      </div>

      <Routes>
        <Route path="offers" element={<Offers />}/>
      </Routes>

    </div>
  )
}
