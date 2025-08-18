import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaBirthdayCake, FaHeart, FaBuilding, FaBaby, FaRing } from 'react-icons/fa'

const categories = [
  { name: "Birthdays", icon: <FaBirthdayCake /> },
  { name: "Weddings", icon: <FaHeart /> },
  { name: "Corporate", icon: <FaBuilding /> },
  { name: "Baby Showers", icon: <FaBaby /> },
  { name: "Anniversaries", icon: <FaRing /> }
]

const Categories = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4 text-center bg-gradient-to-r from-pink-50 via-white to-pink-50">
      <h2 className="text-4xl font-bold mb-10 text-pink-600">Explore Event Categories</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            onClick={() => navigate(`/categories/${cat.name.toLowerCase().replace(/\s+/g, '-')}`)}
            className="w-44 h-44 bg-white shadow-md rounded-xl flex flex-col items-center justify-center text-pink-600 hover:text-white hover:bg-gradient-to-tr from-pink-500 to-pink-700 transition duration-300 transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="text-3xl mb-2">{cat.icon}</div>
            <p className="font-semibold text-lg">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Categories
