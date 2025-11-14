// components/QuotePopup.jsx
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const QuotePopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirement: '',
    service: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('service', formData.service);
    formDataToSend.append('requirement', formData.requirement);
    formDataToSend.append('_subject', `Quote Request - ${formData.service}`);
    formDataToSend.append('_captcha', 'false');
    formDataToSend.append('_template', 'table');

    const response = await fetch('https://formsubmit.co/Reddi@Lndservices.in', {
      method: 'POST',
      body: formDataToSend,
    });

    if (response.ok) {
      setShowSuccess(true);
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          requirement: '',
          service: ''
        });
        setShowSuccess(false);
        setIsSubmitting(false);
        onClose();
      }, 3000);
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Fallback to mailto
    const subject = `Quote Request - ${formData.service}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Requirement: ${formData.requirement}
    `.trim();

    const mailtoLink = `mailto:sureshpentapilli1995@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
    
    // Show success for fallback
    setShowSuccess(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        requirement: '',
        service: ''
      });
      setShowSuccess(false);
      setIsSubmitting(false);
      onClose();
    }, 3000);
  }
};

  const handleClose = () => {
    setShowSuccess(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      requirement: '',
      service: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md transform transition-all duration-300 scale-100">
        
        {/* Success Message */}
        {showSuccess ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-check-line text-3xl text-green-600"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Success!</h3>
            <p className="text-gray-600 mb-6">
              Your quote request has been submitted successfully. 
              We'll get back to you soon!
            </p>
            <div className="flex justify-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-xl">
              <div>
                <h2 className="text-xl font-bold">Get a Free Quote</h2>
                <p className="text-blue-100 text-sm mt-1">We'll get back to you soon</p>
              </div>
              <button
                onClick={handleClose}
                className="text-white hover:text-blue-200 transition-colors p-1 rounded-full hover:bg-blue-800"
                disabled={isSubmitting}
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <i className="ri-user-line mr-2 text-blue-600"></i>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <i className="ri-mail-line mr-2 text-blue-600"></i>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <i className="ri-phone-line mr-2 text-blue-600"></i>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Service Dropdown */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <i className="ri-briefcase-line mr-2 text-blue-600"></i>
                  Service Interested In *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                  <option value="">Select a service</option>
                  <option value="Loans">Loans</option>
                  <option value="Insurance">Insurance</option>
                  <option value="IT Service">IT Service</option>
                </select>
              </div>

              {/* Requirement Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <i className="ri-file-text-line mr-2 text-blue-600"></i>
                  Your Requirements
                </label>
                <textarea
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  rows="4"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Tell us about your specific requirements..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleClose}
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-200 font-semibold border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-line mr-2"></i>
                      Get Quote
                    </>
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default QuotePopup;