import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bottleImage from "../assets/bottle2.png"; // Ensure the path is correct

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
          className="flex flex-col md:flex-row items-center gap-6 md:gap-12 px-8 py-8 pt-25 bg-green-50"
          data-aos="fade-up"
        >
        {/* Text Content */}
        <div className="max-w-md md:flex-1" data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
            Glow Naturally
          </h1>
          <p className="text-lg text-green-900 mb-6">
            Discover premium creams, oils, and skincare essentials made for women.
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Shop Now
          </button>
        </div>


        {/* Bottle Image */}
        <div
          className="w-80 md:w-[26rem] float-animation drop-shadow-[0_10px_10px_rgba(0,0,0,0.2)]"
          data-aos="flip-left"
        >
          <img
            src={bottleImage}
            alt="Cosmetic Bottle"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-textdark mb-10 text-center">
            Our Best Sellers
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="flex flex-col items-center" data-aos="zoom-in-up">
              <img
                src="https://m.media-amazon.com/images/I/71WepLDJmUL._SL1500_.jpg"
                alt="Saffron Dew Cream"
                className="w-full h-72 object-cover mb-4 drop-shadow-[0_10px_10px_rgba(0,0,0,0.15)] rounded-lg"
              />
              <h3 className="text-2xl font-semibold text-textdark mb-4">
                Saffron Dew Cream
              </h3>
              <p className="text-gray-700 text-center">
                A nourishing cream infused with saffron to rejuvenate and brighten your skin.
              </p>
            </div>

            {/* Product 2 */}
            <div className="flex flex-col items-center" data-aos="zoom-in-up">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsF_vkqmgOYyXNwg27s1qSGsc8qUfmG0IfVQ&s"
                alt="Herbal Hair Oil"
                className="w-full h-72 object-cover mb-4 drop-shadow-[0_10px_10px_rgba(0,0,0,0.15)] rounded-lg"
              />
              <h3 className="text-2xl font-semibold text-textdark mb-4">
                Herbal Hair Oil
              </h3>
              <p className="text-gray-700 text-center">
                An anti-dandruff hair oil that strengthens hair follicles and prevents hair fall.
              </p>
            </div>

            {/* Product 3 */}
            <div className="flex flex-col items-center" data-aos="zoom-in-up">
              <img
                src="https://tegor.us/wp-content/uploads/2022/11/Eye-Care-Cream-SPF-10-20ml-2017-1.jpg"
                alt="Eye Care Cream"
                className="w-full h-72 object-cover mb-4 drop-shadow-[0_10px_10px_rgba(0,0,0,0.15)] rounded-lg"
              />
              <h3 className="text-2xl font-semibold text-textdark mb-4">
                Eye Care Cream
              </h3>
              <p className="text-gray-700 text-center">
                Reduces puffiness and dark circles, giving your eyes a fresh, youthful appearance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beauty Essentials Highlights Section */}
      <section className="bg-brand-light py-16 px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12" data-aos="fade-right">
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/1*V9V2-2wZYla5tIBXp3JJmw@2x.jpeg"
              alt="Natural Skincare"
              className="w-full md:w-1/2 h-96 object-cover rounded-lg drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)]"
            />
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold text-textdark mb-4">
                Embrace Natural Beauty
              </h3>
              <p className="text-textdark text-lg">
                Our skincare line is crafted from the finest natural ingredients, designed to nourish your skin gently and effectively. Say goodbye to harsh chemicals and hello to radiant, healthy skin.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12" data-aos="fade-left">
            <img
              src="https://bioayurveda.com/cdn/shop/files/5INGREDIENTS_bdd101f4-dcf7-4e67-8ab5-e65ebe611f3c_1280x-ezgif.com-webp-to-jpg-converter_2.jpg?v=1709272310"
              alt="Oil Treatment"
              className="w-full md:w-1/2 h-96 object-cover rounded-lg drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)]"
            />
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold text-textdark mb-4">
                Deep Nourishment Oils
              </h3>
              <p className="text-textdark text-lg">
                Our luxury oil blends penetrate deep into your skin and scalp to restore vitality. Ideal for dry, sensitive skin or hair in need of hydration and shine.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
