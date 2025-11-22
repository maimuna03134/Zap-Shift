import React from 'react';
import MyContainer from '../../components/MyContainer';
import { FaChartBar, FaGlobeAmericas, FaHandshake, FaMoneyBillWave, FaShippingFast, FaUndoAlt } from 'react-icons/fa';

const OurServices = () => {
    const servicesData = [
      {
        icon: <FaShippingFast className="w-12 h-12" />,
        title: "Express & Standard Delivery",
        description:
          "We deliver parcels within 24–72 hours in Dhaka, Chattogram, Sylhet, Khulna, and throughout Bangladesh. Express delivery takes just 6–8 hours from pick-up to drop-off!",
     
      },
      {
        icon: <FaGlobeAmericas className="w-12 h-12" />,
        title: "Nationwide Delivery",
        description:
          "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
   
      },
      {
        icon: <FaChartBar className="w-12 h-12" />,
        title: "Fulfillment Solution",
        description:
          "We also offer customized service with inventory management support, online order processing, packaging, and after-sales support.",
  
      },
      {
        icon: <FaMoneyBillWave className="w-12 h-12" />,
        title: "Cash on Home Delivery",
        description:
          "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    
      },
      {
        icon: <FaHandshake className="w-12 h-12" />,
        title: "Corporate Service / Contract in Logistics",
        description:
          "Customized corporate service which includes warehouses and inventory management support.",
    
      },
      {
        icon: <FaUndoAlt className="w-12 h-12" />,
        title: "Parcel Return",
        description:
          "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
       
      },
    ];
    return (
      <MyContainer className={"mb-12"}>
        <div className="bg-linear-to-br from-teal-900 to-teal-700 rounded-3xl p-10 md:p-12">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Our Services
          </h2>
          <p className="text-center text-white/90 text-sm mb-10 max-w-3xl mx-auto">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="hover:bg-lime-400 bg-white
               p-9 rounded-xl text-center hover:shadow-xl transition-shadow"
              >
                <div className='flex justify-center "text-teal-800 mb-4'>
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </MyContainer>
    );
};

export default OurServices;