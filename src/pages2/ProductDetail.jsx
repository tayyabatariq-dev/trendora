import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const productList = [
  {
    id: 1,
    name: "Birthday Party",
    price: "$199",
    description:
      "Celebrate in style with a vibrant birthday setup featuring themed décor, balloons, and a custom cake arrangement. We create an atmosphere full of joy and unforgettable memories, tailored to your preferences.",
    includes: [
      "Themed decoration & balloons",
      "Elegant custom cake table",
      "Guest seating arrangement",
      "Photography-ready backdrop"
    ],
    img: "https://img.freepik.com/free-photo/birthday-celebrations-with-screaming-friends_23-2147716842.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 2,
    name: "Wedding Decor",
    price: "$499",
    description:
      "Transform your special day with our luxury wedding décor service. From elegant floral arrangements to ambient lighting, we ensure every detail reflects romance and sophistication — leaving guests enchanted.",
    includes: [
      "Stage & backdrop setup",
      "Premium floral arrangements",
      "Romantic ambient lighting",
      "VIP seating décor"
    ],
    img: "https://media.istockphoto.com/id/916474968/photo/table-setting-at-a-luxury-wedding-and-beautiful-flowers-on-the-table.jpg?s=612x612&w=0&k=20&c=YHyW3G2M4zJEk94qLbrwtk3b2o3iBG1xMteBTyGwYY8=",
  },
  {
    id: 3,
    name: "Corporate Event",
    price: "$299",
    description:
      "Host a professional and seamless corporate event with our premium setup services. Designed for conferences, product launches, and networking sessions, we focus on comfort and brand impact.",
    includes: [
      "Podium & stage setup",
      "Projector & screen arrangement",
      "Professional seating",
      "Custom branding options"
    ],
    img: "https://media.istockphoto.com/id/1571182465/photo/seminar-conference-workshop-event-backdrop-stage-projector-screen-podium-chairs.webp?a=1&b=1&s=612x612&w=0&k=20&c=BK-JEEqyiFoeytSsy6jKI2SYssPOxI9OK8fhXZmCn4g=",
  },
  {
    id: 4,
    name: "Baby Shower Setup",
    price: "$179",
    description:
      "Welcome your little one in style with our adorable baby shower décor. Soft pastel themes, charming props, and a warm atmosphere make it a truly special occasion.",
    includes: [
      "Balloon & floral decoration",
      "Custom cake table",
      "Guest seating arrangement",
      "Photo zone setup"
    ],
    img: "https://media.istockphoto.com/id/1429130861/photo/photo-zone-of-white-arc-with-round-part-decorated-by-lights-strings-colorful-balloons-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=K81IxQwoJ_mIYwVtg_vfNZ91PRf7yPs3bIQ-BqL8clk=",
  },
  {
    id: 5,
    name: "Graduation Celebration",
    price: "$189",
    description:
      "Mark your academic achievement with vibrant décor, themed banners, and the perfect photo booth for lasting memories with friends and family.",
    includes: [
      "Stage & banner setup",
      "Graduation-themed balloons",
      "Guest seating",
      "Photo booth arrangement"
    ],
    img: "https://media.istockphoto.com/id/1496195459/photo/young-graduates-throwing-their-mortarboard-in-the-air-while-celebrating-on-graduation.webp?a=1&b=1&s=612x612&w=0&k=20&c=lPJvxFNqPxy93bqatRmadW_nkKIdS3r7Si38DWwXy7A=",
  },
  {
    id: 6,
    name: "Anniversary Package",
    price: "$249",
    description:
      "Celebrate your love story with a romantic and intimate anniversary setup. From candlelit dinners to floral décor, every element is crafted to make the moment unforgettable.",
    includes: [
      "Candlelight table arrangement",
      "Fresh flower décor",
      "Custom cake table",
      "Ambient lighting"
    ],
    img: "https://i.pinimg.com/736x/9f/f1/90/9ff1908828f6a302118d8eb277c1da96.jpg",
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = productList.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center mt-20">Package not found!</h2>;
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`flex flex-col md:flex-row items-center gap-12 ${
          product.id % 2 === 0 ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            {product.name}
          </h1>
          <p className="text-pink-600 text-2xl font-semibold">
            {product.price}
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            {product.description}
          </p>

          <ul className="space-y-3">
            {product.includes.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="text-pink-500 w-6 h-6 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-6 px-8 py-3 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition"
          >
            Confirm Booking
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default ProductDetail;
