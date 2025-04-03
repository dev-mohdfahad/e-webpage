import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-700">
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
        
        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-400">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 mt-1 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-gray-400">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 mt-1 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Login Button */}
          <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
            Login
          </button>
        </form>

        {/* Register & Forgot Password Links */}
        <div className="mt-4 text-center">
          <p className="text-gray-400">
            Don't have an account?{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Register
            </a>
          </p>
          <p>
            <a href="#" className="text-blue-400 hover:underline">
              Forgot Password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
