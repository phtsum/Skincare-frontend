import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-100 text-gray-700 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Lucy skincare</h2>
          <p>Your natural path to healthy, glowing skin.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-medium mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-green-600">Home</a></li>
            <li><a href="/about" className="hover:text-green-600">About Us</a></li>
            <li><a href="/products" className="hover:text-green-600">Products</a></li>
            <li><a href="/contact" className="hover:text-green-600">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-medium mb-2">Subscribe</h3>
          <p className="text-sm mb-2">Get skincare tips and product updates.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="p-2 rounded border w-full"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-medium mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="text-green-600 hover:text-green-800"><FaFacebook size={24} /></a>
            <a href="#" aria-label="Instagram" className="text-green-600 hover:text-green-800"><FaInstagram size={24} /></a>
            <a href="#" aria-label="Twitter" className="text-green-600 hover:text-green-800"><FaTwitter size={24} /></a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} GlowSkin. All rights reserved.
      </div>
    </footer>
  );
}
