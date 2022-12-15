import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createEvent } from "../../actions/events";
import Filebase from "react-file-base64";

const initialState = {
  eventName: "",
  club: "",
  desc: "",
  limit: NaN,
  tags: [],
  image: "",
  participants: [],
};

export default function Create() {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createEvent({ ...form, creator: user?.result?._id }, navigate));
  };
  const state = useSelector((store) => store.eventReducer);

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
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="eventName"
                placeholder="Event Name"
                onChange={handleChange}
              />
              <input
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="club"
                placeholder="Associated club name"
                onChange={handleChange}
              />

              <input
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="desc"
                placeholder="Short Description"
                onChange={handleChange}
              />

              <input
                type="number"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="limit"
                placeholder="Size limit (if any)"
                onChange={handleChange}
              />
              <input
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="tags"
                placeholder="Enter tags seperated by , "
                onChange={(e) =>
                  setForm({ ...form, tags: e.target.value.split(",") })
                }
              />
              <Filebase
                type="file"
                multiple={false}
                class="mb-4"
                onDone={({ base64 }) => setForm({ ...form, image: base64 })}
              />

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
