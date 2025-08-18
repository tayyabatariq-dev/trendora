import React from 'react'
import { Link } from 'react-router-dom';


const productList = [
  { id: 1, name: "Birthday Party", price: "$199", img: "https://img.freepik.com/free-photo/birthday-celebrations-with-screaming-friends_23-2147716842.jpg?semt=ais_hybrid&w=740&q=80" },
  
  { id: 2, name: "Wedding Decor", price: "$499", img: "https://media.istockphoto.com/id/916474968/photo/table-setting-at-a-luxury-wedding-and-beautiful-flowers-on-the-table.jpg?s=612x612&w=0&k=20&c=YHyW3G2M4zJEk94qLbrwtk3b2o3iBG1xMteBTyGwYY8=" },
  
  { id: 3, name: "Corporate Event", price: "$299", img: "https://media.istockphoto.com/id/1571182465/photo/seminar-conference-workshop-event-backdrop-stage-projector-screen-podium-chairs.webp?a=1&b=1&s=612x612&w=0&k=20&c=BK-JEEqyiFoeytSsy6jKI2SYssPOxI9OK8fhXZmCn4g=" },
   {
    id: 4,
    name: "Baby Shower Setup",
    price: "$179",
    img: "https://media.istockphoto.com/id/1429130861/photo/photo-zone-of-white-arc-with-round-part-decorated-by-lights-strings-colorful-balloons-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=K81IxQwoJ_mIYwVtg_vfNZ91PRf7yPs3bIQ-BqL8clk="
  },
  {
    id: 5,
    name: "Graduation Celebration",
    price: "$189",
    img: "https://images.squarespace-cdn.com/content/v1/622bc5b67874d51b368a4adb/87c5f20f-2db0-4aa3-bc96-cc5bcdcd2ce7/Graduation+Package+Website+Thumbnail+%28Website%29-13.png?format=2500w"
  },
  
   {
    id: 6,
    name: "Anniversary Package",
    price: "$249",
    img: "https://i.pinimg.com/736x/9f/f1/90/9ff1908828f6a302118d8eb277c1da96.jpg"
  },
  
]

const Products = () => {
  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">Event Packages</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {productList.map(product => (
          <div key={product.id} className="border p-4 rounded shadow hover:shadow-lg transition">
            <img src={product.img} alt={product.name} className="min-h w-full h-48 object-cover  rounded" />
            <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
            <p className="text-pink-600 font-medium">{product.price}</p>
            <Link to= {`/product/${product.id}`} >
              <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded">Book Now</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Products
