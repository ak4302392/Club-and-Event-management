export default function Register() {
  return (
    <div class="content-center mx-auto w-full md:w-2/4 my-10  ">
      <div class="w-full rounded overflow-hidden shadow-sm  mx-auto  ">
        <div class="flex md:flex-row flex-col items-center  ">
          <img
            class="w-60 h-60"
            src={require("../../images/manit_logo.jpg")}
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <div class=" pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
            <p class="text-gray-700 text-base ">
              Faculty Cordinator: Prof. ABC Z
            </p>
            <p class="text-gray-700 text-base ">
              Head Cordinator: Mr. XYZ Singh
            </p>
            <p class="text-gray-700 text-base ">Number of members: 100+</p>
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
              <input
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="fullname"
                placeholder="Full Name"
              />

              <input
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
              />

              <input
                type="password"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
              />
              <input
                type="password"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="confirm_password"
                placeholder="Confirm Password"
              />

              <button
                type="submit"
                class="  bg-green-300 hover:bg-green-500 text-white-0 w-full text-center py-3 rounded  hover:bg-green-dark focus:outline-none my-1"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
