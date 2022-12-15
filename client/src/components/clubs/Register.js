import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateEvent } from "../../actions/events";
import { updateUser } from "../../api";
import { OUTSIDER, STUDENT } from "../../constants/actionTypes";
const initialState = {
  id: "",
  fullName: "",
  email: "",
  mobile: "",
  userType: "",
  scholarNumber: NaN,
};

export default function Register() {
  const location = useLocation();
  const { event } = location.state;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const handleSubmit = (e) => {
    e.preventDefault();
    event.participants.push(form);
    dispatch(updateEvent(event._id, event));
    navigate("/dashboard");
  };

  //to set the value of user type from the radio button
  const [userType, setUserType] = useState(OUTSIDER);
  const handleRadioChange = (e) => {
    // console.log(e.target.value)
    setUserType(e.target.value);
    setForm({ ...form, userType: userType });
    setForm({ ...form, userName: user?.result._id });
  };
  return (
    <div class="content-center mx-auto w-full md:w-2/4 my-10  ">
      <div class="w-full rounded overflow-hidden shadow-sm  mx-auto  ">
        <div class="flex md:flex-row flex-col items-center  ">
          <img
            class="w-60 h-60"
            src={event.image}
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{event.eventName}</div>
            <div class=" pt-4 pb-2">
              {event.tags.map((t) => (
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {t}
                </span>
              ))}
            </div>
            <p class="text-gray-700 text-base ">
              Faculty Cordinator: Prof. ABC Z
            </p>
            <p class="text-gray-700 text-base ">
              Head Cordinator: Mr. XYZ Singh
            </p>
            <p class="text-gray-700 text-base ">
              Limit on participants: {event.limit}
            </p>
            <p class="text-gray-700 text-base ">
              Office Address: NTB Room no - TA-314
            </p>
          </div>
        </div>
        <div class="flex flex-col px-3 py-5">
          {/*Registration form*/}
          <div class="container  mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-white px-6 py-8  text-black w-full">
              <h2 class="mb-8 text-2xl text-center">Registration Form</h2>
              <form onSubmit={handleSubmit}>
                <input
                  onChange={handleChange}
                  type="text"
                  class="block border border-grey-light w-full p-3 rounded mb-4"
                  name="fullName"
                  placeholder="Full Name"
                />

                <input
                  onChange={handleChange}
                  type="text"
                  class="block border border-grey-light w-full p-3 rounded mb-4"
                  name="email"
                  placeholder="Email"
                />

                <input
                  onChange={handleChange}
                  type="tel"
                  class="block border border-grey-light w-full p-3 rounded mb-4"
                  name="mobile"
                  placeholder="Mobile Number (without +91)"
                />
                <div class="mb-3">
                  <input
                    onChange={handleRadioChange}
                    checked={userType === OUTSIDER}
                    value={OUTSIDER}
                    type="radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-radio-1"
                    class="mr-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Manit Student
                  </label>
                  <input
                    onChange={handleRadioChange}
                    checked={userType === STUDENT}
                    value={STUDENT}
                    type="radio"
                    class="pb-10 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-radio-2"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Outsider
                  </label>
                </div>
                {userType === OUTSIDER ? (
                  <input
                    onChange={handleChange}
                    type="number"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="scholarNumber"
                    placeholder="Scholar Number"
                  />
                ) : (
                  <input
                    onChange={handleChange}
                    type="text"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="address"
                    placeholder="Current Address"
                  />
                )}

                <button
                  type="submit"
                  class="  bg-green-300 hover:bg-green-500 text-white-0 w-full text-center py-3 rounded  hover:bg-green-dark focus:outline-none my-1"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
