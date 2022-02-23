import { useState } from "react";

const Offers = () => {
    const [items] = useState([
        { title: "Hoodies - Coffee", price: 21.99 },
        { title: "Sneakers - Naruto", price: 35.99 },
        { title: "Beanies", price: 15.99 }
    ])

    return ( 
        <div>
            <h3>Latest Offers</h3>
            <div className="offers">
                {items.map(item => (
                    <div key={item.title}>
                        <img src="https://via.placeholder.com/350x200" alt="product" />
                        <h4>{item.title}</h4>
                        <p>${item.price}</p>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Offers;