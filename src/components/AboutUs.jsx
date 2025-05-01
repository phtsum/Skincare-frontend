import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-16 bg-green-50" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-green-600 mb-6">About Us</h2>
        <p className="text-lg text-gray-700 mb-8" data-aos="fade-up" data-aos-delay="100">
          At Lucy Skin care, we are dedicated to creating high-quality, natural products that promote overall wellness and beauty. Our mission is to provide our customers with products that not only nourish the skin but also align with eco-friendly practices to ensure sustainability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="text-left" data-aos="fade-right" data-aos-delay="200">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Our Story</h3>
            <p className="text-lg text-gray-700">
              Founded in 2022, we started with a passion for natural ingredients and a vision to bring wellness into everyday life. With a focus on ethical sourcing and sustainable practices, we aim to make a positive impact on both our customers' lives and the environment.
            </p>
          </div>
          
          <div className="text-left">
            <h3 className="text-2xl font-semibold text-green-600 mb-4" data-aos="fade-left" data-aos-delay="200">Our Values</h3>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li data-aos="fade-left" data-aos-delay="300">100% Natural Ingredients</li>
              <li data-aos="fade-left" data-aos-delay="500">Eco-Friendly Practices</li>
              <li data-aos="fade-left" data-aos-delay="700">Commitment to Quality</li>
              <li data-aos="fade-left" data-aos-delay="900">Customer-Centric Service</li>
            </ul>
          </div>
        </div>

        <div className="mt-12" data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-2xl font-semibold text-green-600 mb-4">Why Choose Us?</h3>
          <p className="text-lg text-gray-700">
            With our unique blends of premium ingredients, our products are designed to deliver effective results while promoting your health and well-being. Whether it's skincare, haircare, or personal wellness, you can trust us to provide the highest standards of natural care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
