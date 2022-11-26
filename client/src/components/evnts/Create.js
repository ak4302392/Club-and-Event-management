import { useState } from "react";

const initialState = {
  eventName: "",
  club: "",
  desc: "",
  limit: NaN,
  tags: [],
  image: "",
};

export default function Create() {
  const [form, setForm] = useState(initialState);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // dispatch(signup(form, navigate));
  };

  return (
    <div class="content-center mx-auto w-full md:w-2/4 my-10  ">
      <div class="flex flex-col px-3 py-5">
        {/*Registration form*/}
        <div class="container  mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-white px-6 py-8  text-black w-full">
            <h2 class="mb-8 text-2xl font-bold text-center">
              Create a new event!
            </h2>
            <form onSubmit={handleSubmit}>
              <input
                onChange={handleChange}
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="eventName"
                placeholder="Event Name"
              />
              <input
                onChange={handleChange}
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="club"
                placeholder="Associated club name"
              />

              <input
                onChange={handleChange}
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="desc"
                placeholder="Short Description"
              />

              <input
                onChange={handleChange}
                type="number"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="limit"
                placeholder="Size limit (if any)"
              />
              <input
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="tags"
                placeholder="Enter tags seperated by , "
                onChange={(e) =>
                  setForm({ ...setForm, tags: e.target.value.split(",") })
                }

              />

              <label
                for="dropzone-file"
                class="mb-4 flex flex-col items-center justify-center w-full h-30 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    class="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload Image</span> or
                    drag and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  class="hidden"
                  name="image"
                  onChange={handleChange}
                />
              </label>

              <button
                type="submit"
                class="  bg-green-300 hover:bg-green-500 text-white-0 w-full text-center py-3 rounded  hover:bg-green-dark focus:outline-none my-1"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
