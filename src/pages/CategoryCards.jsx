import React from 'react';

const categories = [
  {
    id: 1,
    name: "T-Shirts",
    image: "https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VCUyMFNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Dresses",
    image: "https://images.unsplash.com/photo-1640923160720-35dddb6348ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHJlc3Nlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    name: "Shoes",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1723802205505-2f88b2227718?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEFjY2Vzc29yaWVzfGVufDB8fDB8fHww",
  },
];

const CategoryCards = () => {
  return (
    <section className="category-section">
      <h2 className="section-heading">Shop by Category</h2>
      <div className="category-grid">
        {categories.map((cat) => (
          <div className="category-card" key={cat.id}>
            <img src={cat.image} alt={cat.name} />
            <div className="category-name">{cat.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryCards;
