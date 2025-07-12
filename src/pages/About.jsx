import React from 'react';
import { assets } from '../assets/assets';
import { Clock, Heart, Check, Users, Sun, Smile} from 'lucide-react'; // Assuming Yoga and Meditation icons exist or replace with relevant icons.

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16 space-y-20">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to <span className="text-[#216B7B]">HealOwell</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          A holistic approach to health, combining advanced technology and compassionate care for your mind, body, and spirit.
        </p>
      </section>

      {/* Image and Mission */}
      <section className="flex flex-col lg:flex-row gap-16 items-center mb-20">
        <div className="lg:w-1/2 relative">
          <div className="absolute inset-0 bg-[#dadada] rounded-3xl transform rotate-0}"></div>
          <img 
            className="relative rounded-3xl shadow-2xl object-fit w-full h-[500px]" 
            src={assets.logo} 
            alt="Healthcare and wellness professionals" 
          />
        </div>
        <div className="lg:w-1/2 space-y-8">
          <h2 className="text-4xl font-bold text-gray-800 leading-tight">
            Empowering Your Wellness Journey
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            HealOwell is dedicated to enhancing your well-being through a balanced and personalized approach. Our innovative platform integrates AI-driven tools to support your mental and physical health, offering resources for yoga, meditation, fitness, and overall wellness.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-[#a6d0ba] py-16 rounded-3xl px-8 space-y-8">
        <h2 className="text-center text-4xl font-bold mb-10 text-[#216B7B]">Our Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: <Heart className="w-10 h-10 mx-auto mb-4 text-[#216B7B] " />,
              title: "AI Yoga Assistant",
              description: "Personalized, AI-guided yoga sessions to enhance flexibility, strength, and mindfulness from the comfort of your home."
            },
            {
              icon: <Smile className="w-10 h-10 mx-auto mb-4 text-[#216B7B] " />,
              title: "Guided Meditation",
              description: "Access a library of guided meditations tailored to reduce stress, improve focus, and elevate mental clarity."
            },
            {
              icon: <Heart className="w-10 h-10 mx-auto mb-4 text-[#216B7B] " />,
              title: "Holistic Health Plans",
              description: "Customized health plans encompassing diet, physical exercise, and mental wellness to achieve balanced health."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300">
              <div className="text-[#216B7B]">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision and Values */}
      <section className="space-y-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            At HealthEase, we envision a world where healthcare is seamlessly integrated into your daily life. We are here to help you achieve a balanced, healthy lifestyle through accessible, technology-driven wellness solutions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="bg-gradient-to-r from-blue-100 to-white p-8 rounded-2xl border-l-4 border-[#216B7B] lg:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To empower individuals on their wellness journeys by providing holistic, convenient, and compassionate healthcare solutions. HealthEase combines the best of technology and humanity to create a balanced approach to health.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-100 to-white p-8 rounded-2xl border-l-4 border-[#216B7B] lg:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h3>
            <ul className="text-gray-600 space-y-2 list-disc list-inside">
              <li>Accessibility and Inclusivity</li>
              <li>Data Security and Privacy</li>
              <li>Commitment to Holistic Health</li>
              <li>Innovation in Healthcare</li>
              <li>Empathy and Compassion</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
