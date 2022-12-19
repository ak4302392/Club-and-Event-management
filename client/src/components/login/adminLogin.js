import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminSignin } from "../../actions/auth";

const initialState = {
  email: "",
  password: "",
};

export default function AdminLogin() {
  const [form, setForm] = useState(initialState);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(adminSignin(form, navigate));
    
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div class="bg-grey-lighter min-h-screen flex flex-col ">
      <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <h1 class="mb-8 text-3xl text-center">Admin SignIn</h1>
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 class="mb-8 text-3xl text-center">Sign In</h1>
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <input
              onChange={handleChange}
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />

            <button
              type="submit"
              class="  bg-green-300 hover:bg-green-500 text-white-0 w-full text-center py-3 rounded  hover:bg-green-dark focus:outline-none my-1"
            >
              Sign In
            </button>
          </form>
        </div>

        <div class="text-grey-dark mt-2">
          Don't have an account?
          <a
            class="no-underline border-b border-blue text-blue-400"
            href="/signup"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
