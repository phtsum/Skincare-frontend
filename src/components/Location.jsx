import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Location = () => {
  return (
    <section className="bg-green-50 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-10">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10 mb-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="text-green-700 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-green-800">Email</h3>
                <p className="text-green-700">support@lucyskincare.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-green-700 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-green-800">Phone</h3>
                <p className="text-green-700">+251 911 123 456</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-green-700 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-green-800">Address</h3>
                <p className="text-green-700">Bole, Addis Ababa, Ethiopia</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-green-700 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-green-800">Working Hours</h3>
                <p className="text-green-700">Mon - Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Google Map Embed (your map) */}
          <div className="w-full h-80">
            <iframe
              title="Google Map - Bole"
              className="w-full h-full rounded-lg shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10609.267575972734!2d38.79513827992763!3d8.978666531944329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9b3b48de137d%3A0xad4b51f56eb76cc9!2sBole!5e1!3m2!1sen!2set!4v1746046330231!5m2!1sen!2set"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
