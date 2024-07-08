import React, { useState } from 'react';
import { ComplexNavbar } from '../Shared/Header';
import { FooterWithSitemap } from '../Shared/Footer';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    repeatPassword: '',
    termsAgreed: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (formData.password !== formData.repeatPassword) {
      alert("Passwords don't match!");
      return;
    }

    if (!formData.termsAgreed) {
      alert('Please agree to the terms and conditions.');
      return;
    }

    // Continue with form submission logic
    // For example, you can submit the form data to an API or perform further actions here
    console.log('Form data:', formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-backWhitelm dark:bg-backdarkdm">
      <ComplexNavbar /> {/* Include your ComplexNavbar component here */}
      <form className="max-w-sm mx-auto mt-10 mb-10 bg-white dark:bg-cardColorbm rounded-lg shadow-lg p-8"
            onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-whitextdm"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow-sm bg-gray-50 dark:bg-cardColorbm border border-gray-300 text-gray-900 dark:text-innerTextColordm text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:ring-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-whitextdm"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="shadow-sm bg-gray-50 dark:bg-cardColorbm border border-gray-300 text-gray-900 dark:text-innerTextColordm text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:ring-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="repeat-password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-whitextdm"
          >
            Repeat password
          </label>
          <input
            type="password"
            id="repeat-password"
            value={formData.repeatPassword}
            onChange={handleChange}
            className="shadow-sm bg-gray-50 dark:bg-cardColorbm border border-gray-300 text-gray-900 dark:text-innerTextColordm text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:ring-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="termsAgreed"
              type="checkbox"
              checked={formData.termsAgreed}
              onChange={handleChange}
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 dark:bg-cardColorbm focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="termsAgreed"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-whitextdm"
          >
            I agree with the{' '}
            <a href="#" className="text-blue-600 hover:underline dark:text-darklinkcolordm">
              terms and conditions
            </a>
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-darkbtncolordm dark:hover:bg-bgHoverdm dark:focus:ring-bgHoverdm dark:focus:border-blue-500"
        >
          Register new account
        </button>
      </form>
      <FooterWithSitemap /> {/* Include your FooterWithSitemap component here */}
    </div>
  );
};

export default Login;
