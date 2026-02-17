import React from 'react';

const Login = ({ setView, setUser }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ name: "Dhanush", isLoggedIn: true }); // Simulating a login
    setView('home'); // Redirect to Application Home
  };

  return (
    <div className="flex justify-center items-center px-4">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <input type="email" placeholder="Email" className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-400 outline-none" required />
          <input type="password" placeholder="Password" className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-400 outline-none" required />
          <button type="submit" className="w-full bg-[#EF4F5F] text-white py-4 rounded-xl font-black text-lg hover:bg-red-600 transition shadow-lg shadow-red-200">Login</button>
        </form>
        <p className="mt-6 text-center text-gray-500">New to Zomato? <button onClick={() => setView('register')} className="text-[#EF4F5F] font-bold">Create account</button></p>
      </div>
    </div>
  );
};

export default Login;