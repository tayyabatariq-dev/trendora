import React from 'react';
 // Make sure this path is correct

const products = [
  {
    id: 1,
    name: "T-Shirt - Summer Vibes",
    description: "100% Cotton, Breathable and Lightweight",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1644860588182-0998b4ef5587?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2xhc3NpYyUyMFdoaXRlJTIwVCUyMFNoaXJ0fGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "Floral Dress",
    description: "Elegant design, perfect for parties",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: " Leather Boots",
    description: "Rugged, Durable, and Fashionable",
    price: "$89.99",
    image: "https://plus.unsplash.com/premium_photo-1673367751802-ed858d3950d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGVhdGhlciUyMEJvb3RzfGVufDB8fDB8fHww ",
  },
  {
    id: 4,
    name: "Running Shoes",
    description: "Comfortable and Stylish ",
    price: "$49.99 ",
    image: "https://images.unsplash.com/photo-1620989928357-71ff9bbf1f34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 5,
    name: "Denim Jacket",
    description: "Classic Fit, All-Season Style",
    price: "$59.99",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fERlbmltJTIwSmFja2V0fGVufDB8fDB8fHww",
  },
  {
    id: 6,
    name: "Canvas Sneakers",
    description: "Everyday comfort with style",
    price: "$34.99",
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 7,
    name: "Casual Shirt",
    description: "Slim fit, formal yet relaxed",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    name: "Maxi Skirt",
    description: "Boho style with a modern twist",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1593980305574-77a4b3080e89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fE1heGklMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
  },
];
const Ecommrce = () => {
  return (
    <section className="ecommerce-container">
      <h2 className="section-heading">Explore Our Latest Fashion Picks</h2>

      <div className="products-grid">
        {products.map((product,index) => {
            return(
                 <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-desc">{product.description}</p>
            <span className="product-price">{product.price}</span>
          </div>
            )
        }
    )}
      </div>
    </section>
  );
};

export default Ecommrce;