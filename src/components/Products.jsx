import React, { useState, useEffect } from 'react';
import { Star, StarOff } from 'lucide-react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

const products = [
  {
    id: 1,
    name: 'Herbal Soap',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhUCxt8yDAQxwZVqOOBGKbtcrKe0rzzuVW9Q&s',
    description: 'Made with 100% natural ingredients for smooth, glowing skin. This soap is infused with natural oils to gently cleanse and nourish your skin, leaving it soft and refreshed.',
    rating: 4,
    price: '$8.99',
  },
  {
    id: 2,
    name: 'Essential Oil',
    image: 'https://images.pexels.com/photos/2565761/pexels-photo-2565761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Relaxing and refreshing essential oil blend. Crafted to provide relaxation and rejuvenation, this blend combines the finest natural oils to relieve stress and anxiety.',
    rating: 5,
    price: '$12.49',
  },
  {
    id: 3,
    name: 'Face Cream',
    image: 'https://vader-prod.s3.amazonaws.com/1574444309-5dc1ccd2-0a3c-45f7-afab-2a36f6af674f-1-e73c43750a9a828f94092d2ee526bb99-1574444280.jpg',
    description: 'Hydrating cream for radiant and healthy skin. Formulated to lock in moisture and protect the skin from harsh elements, giving your skin a vibrant, smooth texture.',
    rating: 3,
    price: '$10.00',
  },
  {
    id: 4,
    name: 'Hair Serum',
    image: 'https://m.media-amazon.com/images/I/51rYBDhMioL._AC_UF1000,1000_QL80_.jpg',
    description: 'Strengthens and smoothens hair with natural oils. This serum promotes healthy hair growth, reduces frizz, and provides shine for all hair types.',
    rating: 4,
    price: '$15.50',
  },
  {
    id: 5,
    name: 'Body Lotion',
    image: 'https://assets.ajio.com/medias/sys_master/root/20231220/sun1/6582d9b5ddf7791519dca409/-1117Wx1400H-4916003770-multi-MODEL.jpg',
    description: 'Deeply moisturizes and nourishes dry skin. This body lotion is perfect for sensitive skin, offering long-lasting hydration without any greasy residue.',
    rating: 5,
    price: '$11.75',
  },
  {
    id: 6,
    name: 'Lip Balm',
    image: 'https://i5.walmartimages.com/asr/6fced36e-5459-449f-9390-f239c379bd6a_1.75276199dfa8877b4d188f032029913f.jpeg',
    description: 'Keeps lips soft and hydrated all day long. This lip balm is enriched with natural ingredients like shea butter and vitamin E to keep your lips moisturized and smooth.',
    rating: 4,
    price: '$4.99',
  },
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleQuickView = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen p-6 bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-green-600 text-center">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border-[2px] border-black p-4 shadow-md"
            data-aos="fade-up"  // Add AOS data attribute
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[150px] object-cover mb-4"
            />
            <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
            <p className="text-sm mb-2">{product.description}</p>

            <div className="flex items-center mb-2">
              {Array.from({ length: 5 }, (_, index) =>
                index < product.rating ? (
                  <Star key={index} className="text-yellow-400 w-5 h-5" fill="currentColor" />
                ) : (
                  <StarOff key={index} className="text-gray-300 w-5 h-5" />
                )
              )}
            </div>

            <p className="text-lg font-bold text-green-700">{product.price}</p>

            <button
              className="mt-4 py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
              onClick={() => handleQuickView(product)}
            >
              Quick View
            </button>
          </div>
        ))}
      </div>

      {/* Quick View Modal with Background Blur */}
      {selectedProduct && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="absolute inset-0 bg-black opacity-50" onClick={closeModal}></div>
          <div className="bg-white p-6 rounded-lg max-w-lg w-full relative z-10">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">{selectedProduct.name}</h2>
              <button className="text-gray-500 text-2xl" onClick={closeModal}>
                &times;
              </button>
            </div>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-[300px] object-cover my-4"
            />
            <p className="text-lg mb-4">{selectedProduct.description}</p>
            <div className="flex items-center my-2">
              {Array.from({ length: 5 }, (_, index) =>
                index < selectedProduct.rating ? (
                  <Star key={index} className="text-yellow-400 w-5 h-5" fill="currentColor" />
                ) : (
                  <StarOff key={index} className="text-gray-300 w-5 h-5" />
                )
              )}
            </div>
            <p className="text-xl font-bold text-green-700">{selectedProduct.price}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
