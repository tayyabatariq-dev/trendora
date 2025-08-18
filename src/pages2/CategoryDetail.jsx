import React from "react";
import { useParams } from "react-router-dom";

const CategoryDetail = () => {
  const { categoryName } = useParams();

  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-4xl font-bold mb-6 text-pink-600">
        {categoryName} Events
      </h2>
      <p className="text-lg text-gray-600">
        Here you can display all products, services, or events related to{" "}
        <span className="font-semibold">{categoryName}</span>.
      </p>
    </section>
  );
};

export default CategoryDetail;
