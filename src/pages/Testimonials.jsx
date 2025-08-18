import React from 'react'
const testimonials = [
  {
    id: 1,
    name: "Sarah Ali",
    review: "Absolutely love the quality of the dress I bought! Super comfy and stylish.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: 2,
    name: "Ahmed Khan",
    review: "Delivery was fast and the product exceeded my expectations.",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?img=49",
  },
  {
    id: 3,
    name: "Zainab Raza",
    review: "I always find unique items here. Love the variety!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=52",
  },
];

const Testimonials = () => {
  return (
     <section className="testimonials-section">
      <h2 className="section-heading">What Our Customers Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <div className="testimonial-card" key={t.id}>
            <img className="avatar" src={t.avatar} alt={t.name} />
            <h4 className="customer-name">{t.name}</h4>
            <p className="review">"{t.review}"</p>
            <div className="stars">
              {Array(t.rating).fill().map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials