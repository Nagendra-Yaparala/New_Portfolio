import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus('');

    try {
      const result = await emailjs.sendForm(
        'service_4ua1bwo', // EmailJS Service ID
        'template_9xeeu0u', // EmailJS Template ID
        e.target,            // The form data
        '12ZWrVWKdze9AnrKG'       // EmailJS User ID
      );

      if (result.text === 'OK') {
        setSendStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form fields
      } else {
        setSendStatus('Something went wrong, please try again.');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setSendStatus('Error sending message. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-gray-900 text-white py-10 px-5 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-yellow-300">Connect With Me:</h1>
          <p className="text-lg text-gray-300">
            Feel free to reach out for collaborations, opportunities, or just to say hi! Let's create something amazing together.
          </p>
          <div className="flex space-x-4 mt-4">
            {/* Social Media Handles (Examples) */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 transition duration-300"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition duration-300"
            >
              Twitter
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Contact Me</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-700 text-gray-200 placeholder-gray-400 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-blue-600 text-white p-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
            {sendStatus && (
              <div className="mt-4 text-center text-sm text-gray-200">
                {sendStatus}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
