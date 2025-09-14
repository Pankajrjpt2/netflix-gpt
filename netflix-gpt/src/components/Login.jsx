import React from "react";
import Header from "./Header";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="relative">
      <Header />
      <div
        className="w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_small.jpg")`,
        }}
      />
      <form
        onSubmit={handleSubmit}
        className="w-1/4 min-w-[400px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 p-10 rounded-2xl text-white"
      >
        <h1 className="text-3xl font-bold py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleInputChange}
            className="p-3 rounded-md m-1 my-3 w-full bg-gray-700 text-white placeholder-gray-400"
            required={!isSignIn}
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleInputChange}
          className="p-3 rounded-md m-1 my-3 w-full bg-gray-700 text-white placeholder-gray-400"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className="p-3 rounded-md m-1 my-3 bg-gray-700 w-full text-white placeholder-gray-400"
          required
        />

        <button
          type="submit"
          className="p-3 rounded-md m-2 my-4 bg-red-700 w-full hover:bg-red-800 transition-colors"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-sm py-6 text-center">
          {isSignIn ? (
            <>
              New to Netflix?{" "}
              <button
                type="button"
                onClick={toggleSignInForm}
                className="text-blue-400 hover:underline"
              >
                Sign up now.
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={toggleSignInForm}
                className="text-blue-400 hover:underline"
              >
                Sign in now.
              </button>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
