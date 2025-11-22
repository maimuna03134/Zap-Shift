import React from 'react';
import MyContainer from '../../components/MyContainer';
import { FaBoxOpen, FaBuilding, FaDollarSign, FaStore } from 'react-icons/fa';

const HowItWorks = () => {
  const howItWorksData = [
    {
      icon: <FaBoxOpen className="w-12 h-12" />,
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <FaDollarSign className="w-12 h-12" />,
      title: "Cash On Delivery",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <FaStore className="w-12 h-12" />,
      title: "Delivery Hub",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <FaBuilding className="w-12 h-12" />,
      title: "Booking SME & Corporate",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];

    return (
      <MyContainer>
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            How it Works
          </h2>
          <div className="rounded-3xl p-10 md:p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {howItWorksData.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center text-teal-600 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </MyContainer>
    );
};



export default HowItWorks;