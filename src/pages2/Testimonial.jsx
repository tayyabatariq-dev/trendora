import React from 'react'

const testimonials = [
  {
    name: "Sarah",
    message: "Amazing birthday setup!",
    img: "https://images.unsplash.com/photo-1616776005756-4dca36124bf9?w=600&auto=format&fit=crop&q=60"
  },
  {
    name: "Ali",
    message: "Loved the decoration and service!",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600&auto=format&fit=crop&q=60"
  },
  {
    name: "Emma",
    message: "Highly professional and on time.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60"
  },
]

const Testimonial = () => {
  return (
    <section className="py-16 px-4 text-center bg-gray-50">
      <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <img
              src={t.img}
              alt={t.name}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-pink-300"
            />
            <p className="text-gray-700 italic">"{t.message}"</p>
            <h4 className="mt-4 font-semibold text-pink-600">- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonial
