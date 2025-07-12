import React from 'react';
import { assets } from '../assets/assets';
import { Mail, Phone, MapPin, Clock, Building2, ArrowRight, Globe } from 'lucide-react';

const ContactInfoCard = ({ icon: Icon, title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-start gap-4">
      <div className="p-3 bg-blue-50 rounded-full">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <div>
        <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
        {children}
      </div>
    </div>
  </div>
);

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Connect with <span className="text-blue-600">MEDISYNC</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Located at Symbiosis Institute of Technology (SIT) Campus
        </p>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        {/* Contact Image */}
        <div className="relative">
          <div className="absolute -z-10 w-full h-full bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <img 
            className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            src={assets.contact_image}
            alt="Contact Us at SIT"
          />
        </div>

        {/* Contact Information Grid */}
        <div className="grid gap-6">
          <ContactInfoCard icon={Building2} title="Our Location">
            <p className="text-gray-600 leading-relaxed">
              <strong>Symbiosis Institute of Technology (SIT)</strong><br />
              Near Lupin Research Park,<br />
              Gram: Lavale, Tal: Mulshi,<br />
              Pune, Maharashtra 412115, India
            </p>
          </ContactInfoCard>

          <ContactInfoCard icon={Clock} title="OPD Timings">
            <p className="text-gray-600">
              Monday - Saturday: 9:00 AM - 7:00 PM<br />
              Sunday: 9:00 AM - 1:00 PM<br />
              <span className="text-blue-600 font-medium">Emergency Services: 24/7</span>
            </p>
          </ContactInfoCard>

          <ContactInfoCard icon={Phone} title="Contact Numbers">
            <p className="text-gray-600">
              Reception: +91 20 2867 1234<br />
              Emergency: +91 20 2867 5555<br />
              Ambulance: 102
            </p>
          </ContactInfoCard>

          <ContactInfoCard icon={Mail} title="Email & Web">
            <p className="text-gray-600">
              Appointments: medisync.sit@symbiosis.ac.in<br />
              General Enquiries: info.medisync@sit.symbiosis.ac.in<br />
              Website: www.sit.symbiosis.ac.in/medisync
            </p>
          </ContactInfoCard>
        </div>
      </div>

      {/* Map Integration with SIT Marker */}
      <div className="mb-20">
        <div className="bg-white p-4 rounded-2xl shadow-lg">
          <div className="text-gray-700 mb-4">
            <MapPin className="inline-block w-5 h-5 text-blue-600 mr-2" />
            <span className="font-medium">Symbiosis Institute of Technology - MEDISYNC Center</span>
          </div>
          <iframe 
            className="w-full h-[450px] rounded-lg border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.255900857557!2d73.726903!3d18.5401013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67bf7e47%3A0x50efd384303f6cbb!2sSymbiosis%20Institute%20of%20Technology%20-%20SIT%20Pune!5e0!3m2!1sen!2sin!4v1699297183685!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Getting Here Section */}
      <div className="bg-white rounded-2xl p-8 shadow-lg mb-20">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Getting Here</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">From Pune City</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• 45 minutes drive from Pune Railway Station</li>
              <li>• Near Lupin Research Park</li>
              <li>• Located on Mulshi Road</li>
              <li>• Accessible via SIT College Road</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">Landmarks</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• Adjacent to Symbiosis International University</li>
              <li>• Near Lavale Village</li>
              <li>• Close to Lupin Research Park</li>
              <li>• Off Mumbai-Bangalore Highway</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Careers Section */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Join Our Medical Team
          </h2>
          <p className="text-gray-600 mb-8">
            Be part of our prestigious healthcare facility at Symbiosis Institute of Technology.
            We're looking for dedicated healthcare professionals to serve our academic community.
          </p>
          <button className="group bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 mx-auto">
            View Current Openings
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-20 grid md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-gray-50 rounded-xl">
          <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Globe className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold mb-2">Language Support</h3>
          <p className="text-gray-600">English, Hindi, Marathi</p>
        </div>
        
        <div className="text-center p-6 bg-gray-50 rounded-xl">
          <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold mb-2">Campus Location</h3>
          <p className="text-gray-600">Inside SIT Lavale Campus</p>
        </div>

        <div className="text-center p-6 bg-gray-50 rounded-xl">
          <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold mb-2">Toll Free</h3>
          <p className="text-gray-600">1800 2000 108</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;