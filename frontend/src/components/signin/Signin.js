import React, { useState } from "react";

const initialState = {
  email: "",
  password: "",
};

const Signin = () => {
  const [form, setForm] = useState(initialState);
  const {formErrors, setFormErrors} = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleError = (e) => {
    let error = {};

    if(!form.email){
        error.email = "Email is required"

    }

    if(!form.password){
        error.password = "Password is required"
    }

    return error;
  
}

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(handleError())
    // console.log(form);
  };
  return (
    <>

    
    <section className="grid place-content-center bg-gray-200 h-[50vh] rounded-md">
      <h1 className="text-center text-2xl font-medium">Sign In</h1>
      <form
        className="bg-cyan-200 m-1 grid grid-cols-1 gap-3 items-center "
        onSubmit={handleSubmit}
      >
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
          {/* <span className="text-sm text-red-500">{formErrors.email}</span> */}
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
          <span className="text-sm text-red-700">{formErrors.password}</span>

        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-200 w-28 mx-auto transition-all duration-500 ease-linear rounded-lg shadow-xl"
        >
          Sign up
        </button>
      </form>
    </section>
    </>
  );
};

export default Signin;
