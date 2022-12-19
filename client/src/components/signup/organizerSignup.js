import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { organizerSignup } from "../../actions/auth";
const initialState = {
  fullName: "",
  email: "",
  college: "",
  password: "",
  confirmPassword: "",
};

export default function OrganizerSignup() {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(organizerSignup(form, navigate));
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div class="bg-grey-lighter min-h-screen flex flex-col">
      <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <h1 class="mb-8 text-3xl text-center">Organizer Signup</h1>
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 class="mb-8 text-3xl text-center">Sign up</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullName"
              placeholder="Full Name"
              onChange={handleChange}
            />

            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />

            <label
              for="college"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select your college
            </label>
            <select
              id="college"
              name="college"
              onChange={handleChange}
              class="bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a college</option>
              <option value="MANIT">MANIT</option>
              <option value="OTHER">Other</option>
            </select>

            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
            />

            <button
              type="submit"
              class="  bg-green-300 hover:bg-green-500 text-white-0 w-full text-center py-3 rounded  hover:bg-green-dark focus:outline-none my-1"
            >
              Create Account
            </button>
          </form>

          <div class="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a
              class="no-underline border-b border-grey-dark text-grey-dark-400"
              href="#"
            >
              Terms of Service
            </a>{" "}
            and
            <a
              class="no-underline border-b border-grey-dark text-grey-dark-400"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div class="text-grey-dark mt-6">
          Already have an account?
          <a
            class="no-underline border-b border-blue text-blue-400"
            href="/login"
          >
            Log in
          </a>
        </div>
      </div>
    </div>
  );
}
