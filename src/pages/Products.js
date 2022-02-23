import { Link } from "react-router-dom"

function Products() {
  return (
    <div className="content">
      <h3>Hoodies</h3>
      <div className="products">
        {[1,2,3,4].map(p => (
          <div key={p}>
            <Link to={`/products/${p}`}>
              <img src="https://via.placeholder.com/250x150" alt="product" />
            </Link>
          </div>
        ))}
      </div>
      <h3>Tees</h3>
      <div className="products">
        {[5,6,7,8].map(p => (
          <div key={p}>
            <Link to={`/products/${p}`}>
              <img src="https://via.placeholder.com/250x150" alt="product" />
            </Link>
          </div>
        ))}
      </div>
      <h3>Sneakers</h3>
      <div className="products">
        {[9,10,11,12].map(p => (
          <div key={p}>
            <Link to={`/products/${p}`}>
              <img src="https://via.placeholder.com/250x150" alt="product" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products;
