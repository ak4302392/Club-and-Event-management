import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../../actions/auth";
import { CUSTOMER, ORGANIZER } from "../../constants/actionTypes";
const initialState = {
  fullName: "",
  email: "",
  userType: "",
  password: "",
  confirmPassword: "",
};

export default function Signup() {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(form, navigate));
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  //to set the value of user type from the radio button
  const [user, setUser] = useState(ORGANIZER);
  const handleRadioChange = (e) => {
    // console.log(e.target.value)
    setUser(e.target.value);
    setForm({ ...form, userType: user });
  };

  return (
    <div class="bg-grey-lighter min-h-screen flex flex-col">
      <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
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
            <div class="mb-3">
              <input
                onChange={handleRadioChange}
                checked={user === ORGANIZER}
                value={ORGANIZER}
                type="radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-radio-1"
                class="mr-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Normal User
              </label>
              <input
                onChange={handleRadioChange}
                checked={user === CUSTOMER}
                type="radio"
                value={CUSTOMER}
                class="pb-10 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-radio-2"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Organizer
              </label>
            </div>

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
