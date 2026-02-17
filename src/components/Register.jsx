import React from 'react';

const Register = ({ setView }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created! Now please login.");
    setView('login');
  };

  return (
    <div className="flex justify-center items-center px-4 py-10">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input type="text" placeholder="Full Name" className="w-full p-4 border border-gray-200 rounded-xl focus:ring-1 focus:ring-red-400 outline-none" required />
          <input type="email" placeholder="Email" className="w-full p-4 border border-gray-200 rounded-xl focus:ring-1 focus:ring-red-400 outline-none" required />
          <input type="password" placeholder="Password" className="w-full p-4 border border-gray-200 rounded-xl focus:ring-1 focus:ring-red-400 outline-none" required />
          <button type="submit" className="w-full bg-[#EF4F5F] text-white py-4 rounded-xl font-bold text-lg hover:bg-red-600 transition shadow-lg shadow-red-100">Register</button>
        </form>
        <p className="mt-6 text-center text-gray-500">Already have an account? <button onClick={() => setView('login')} className="text-[#EF4F5F] font-bold">Login</button></p>
      </div>
    </div>
  );
};

export default Register;