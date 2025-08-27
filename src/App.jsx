import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './pages2/Navbar';
import Hero from './pages2/Hero';
import Products from './pages2/Products';
import Categories from './pages2/Categories';
import Testimonial from './pages2/Testimonial'; 
import './App.css';
import ContactForm from './pages2/ContactForm';
import Footer from './pages2/Footer';
import ProductDetail from './pages2/ProductDetail';
import CategoryDetail from './pages2/CategoryDetail';


const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products" element={<Products />} />
        <Route path='/product/:id' element ={<ProductDetail/>} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:categoryName" element={<CategoryDetail />} />
        <Route path="/testimonial" element={<Testimonial />} /> 
        <Route path="/contactform" element={<ContactForm/>}/>
      </Routes>
      <Footer/>
      
    </>
  );
};

export default App;







// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import './App.css';
// import Hero from './pages/Hero';
// import Ecommerce from './pages/Ecommerce'; // fixed spelling
// import CategoryCards from './pages/CategoryCards';
// import Testimonials from './pages/Testimonials';
// import Form from './pages/Form';
// import Navbar from './component/Navbar';
// import Footer from './component/Footer'

// const App = () => {
//   return (
//     <>
//        <Navbar/>
// <Routes>
//   <Route path="/" element={<Hero />} />
//   <Route path="/categorycards" element={<CategoryCards />} />
//   <Route path="/ecommerce" element={<Ecommerce />} />
//   <Route path="/testimonials" element={<Testimonials />} />
//   <Route path="/form" element={<Form />} />
// </Routes>

//      <Footer/>
//      </>
//   );
// };

// export default App;
