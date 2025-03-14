import React from "react";

const MedicationDeliveryWebsite = () => {
  return (
    <div className="font-sans text-gray-800 mt-30">
      {/* Banner Section */}
      <div className="relative bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white py-16">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
          url('/Group 1261152838.png'),
          repeating-linear-gradient(90deg, transparent, transparent 15px, rgba(255,255,255,0.1) 15px, rgba(255,255,255,0.1) 30px)
        `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          }}
        ></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <p className="text-lg mb-8 text-black">
            We have partnered with RX-Outreach to provide mail order medications
            at a fraction of the price you may find in your local pharmacy. Meet
            your chronic illness provider online today and get your medication
            delivered as quickly as 24 hours later.
          </p>
          <button className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-md inline-flex items-center transition duration-300 transform hover:-translate-y-1">
            Get The App
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-6 mb-12">
          {/* Company Info */}
          <div className="w-full">
            <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-4 md:mb-6">
              LOGO
            </div>
            <p className="text-gray-600 text-sm md:text-base">
              Experience The Convenience Of Recovery Delivered. Your Trusted
              Source For Online Medication Delivery. We Bring The Pharmacy To
              Your Doorstep, Ensuring Fast, Discreet, And Reliable Service.
              Whether You're Managing A Chronic Condition Or Need A One-Time
              Prescription Filled, We Make The Process Simple And Hassle-Free.
            </p>
          </div>

          {/* Quick Links */}
          <div className="pl-0 sm:pl-4 md:pl-6">
            <h3 className="text-teal-600 font-medium text-lg mb-4 md:mb-6">
              Quick Links
            </h3>
            <ul className="space-y-2 md:space-y-4">
              <li>
                <a
                  href="#"
                  className="hover:text-teal-600 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-600 transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-600 transition duration-300"
                >
                  Owners
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-600 transition duration-300"
                >
                  Tenants
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-600 transition duration-300"
                >
                  Properties
                </a>
              </li>
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h3 className="text-teal-600 font-medium text-lg mb-4 md:mb-6">
              Other Links
            </h3>
            <ul className="space-y-2 md:space-y-4">
              <li>
                <a
                  href="#"
                  className="hover:text-teal-600 transition duration-300"
                >
                  Online Medications
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-600 transition duration-300"
                >
                  Download App
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-600 transition duration-300"
                >
                  Start Treatment
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-600 transition duration-300"
                >
                  Online Urgent Care
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-600 transition duration-300"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-teal-600 font-medium text-lg mb-4 md:mb-6">
              Contact
            </h3>
            <div className="flex items-center mb-6 md:mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>1-866-757-9868</span>
            </div>

            <h3 className="text-teal-600 font-medium text-lg mb-3 md:mb-4">
              Social Media
            </h3>
            <div className="flex space-x-3 md:space-x-4">
              <a
                href="#"
                className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:justify-between text-gray-500 text-sm">
            <p>©2024 - Recovery Delivered | All Right Reserved</p>
            <p className="mt-2 md:mt-0">Designed And Developed By Ripstorm</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MedicationDeliveryWebsite;
