import React from 'react';

function ContactUs() {
  return (
    <div className="bg-[#f1ffee] flex flex-col items-center min-h-screen bg-gradient-to-b from-purple-900 to-purple-700 text-white py-8 sm:py-16">
      <section className="bg-[#b0e7ff] border border-white p-4 md:p-8 rounded-lg shadow-md w-full sm:w-11/12 md:w-4/5 lg:w-2/3 xl:w-1/2 2xl:w-1/3 flex flex-col md:flex-row">
        <div className="bg-[#8fddff] p-4 rounded-lg shadow-md md:flex-1 md:mr-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">CONTACT US</h1>
          <p>
            WE'RE WORKING ON IT! We strive to respond to all inquiries within 24-48 business hours. If you have not received your response, please check your spam or junk mail folder.
          </p>
          <p className="mt-4">
            Email: contact@connexus.com
            <br />
            Phone: +123 456 7890
            <br />
            Address: New Delhi, India
            <br />
            Contact Timings: Mon-Fri 9AM-5PM
          </p>
        </div>
        <form className="flex-1 mt-4 md:mt-0 space-y-4 bg-blue-100 rounded-lg p-4">
          <div className="border border-gray-300 rounded-md p-2 sm:p-3">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Your Name</label>
            <input type="text" id="name" name="name" className="w-full py-1 bg-[#e6f8fd] rounded-lg sm:py-2 focus:outline-none" />
          </div>
          <div className="border border-grey-500 rounded-md p-2 sm:p-3">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email Address</label>
            <input type="email" id="email" name="email" className="bg-[#e6f8fd] rounded-lg w-full py-1 sm:py-2 focus:outline-none" />
          </div>
          <div className="border border-gray-300 rounded-md p-2 sm:p-3">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">Message</label>
            <textarea id="message" name="message" rows="4" className="bg-[#e6f8fd] rounded-lg w-full py-1 sm:py-2 focus:outline-none"></textarea>
          </div>
          <div className="flex justify-center">
          <button type="submit" className="bg-[#a4a2f9] border border-purple-500 text-white py-1 sm:py-2 px-4 sm:px-6 rounded-md font-semibold hover:bg-purple-600 transition duration-300">
              <span className="p-1 sm:p-2 rounded-md font-bold">Send</span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default ContactUs;