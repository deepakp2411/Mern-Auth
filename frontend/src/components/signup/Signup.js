import React, { useState } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Signup = () => {
  const [form, setForm] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
  }
  return (
    <section className="grid place-content-center bg-gray-200 h-[50vh] rounded-md">
      <h1 className="text-center text-2xl font-medium">Create an account</h1>
      <form className="bg-cyan-200 m-1 grid grid-cols-1 gap-3 items-center " onSubmit={handleSubmit}>
        <div className="p-3">
          <label htmlFor="name" className="">
            Name
          </label>
          <input
            placeholder="Enter your name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleInputChange}
            className="w-48"
          />
        </div>
        <div>
          <label htmlFor="email" className="">
            Email
          </label>
          <input
            placeholder="Enter your email"
            name="email"
            type="text"
            value={form.email}
            onChange={handleInputChange}
            className="w-48"
          />
        </div>
        <div className="">
          <label>Password</label>
          <input
            placeholder="Password"
            name="password"
            type="text"
            value={form.password}
            onChange={handleInputChange}
            className="w-48"
          />
        </div>

        <div>
          <label>Confirm Password</label>
          <input
            placeholder="Confirm Password"
            name="confirmPassword"
            type="text"
            value={form.confirmPassword}
            onChange={handleInputChange}
            className="w-52 shadow-md rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-200 w-28 mx-auto transition-all duration-500 ease-linear rounded-lg shadow-xl"
        >
          Sign up
        </button>
      </form>
    </section>
  );
};

export default Signup;
