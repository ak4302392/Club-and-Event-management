export default function Login() {
  return (
    <div class="bg-grey-lighter min-h-screen flex flex-col ">
      <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 class="mb-8 text-3xl text-center">Sign In</h1>

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

          <button
            type="submit"
            class="  bg-green-300 hover:bg-green-500 text-white-0 w-full text-center py-3 rounded  hover:bg-green-dark focus:outline-none my-1"
            
          >
            Sign In
          </button>
        </div>

        <div class="text-grey-dark mt-6">
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
