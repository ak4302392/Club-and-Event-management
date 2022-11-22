const Club = (props) => {
  return (
    <div class="max-w-sm  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          class="rounded-t-lg oject-cover w-full h-48  "
          src={props.image}
          alt=""
        />
      </a>
      <div class="p-5  ">
        <a href="#">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white overflow-hidden">
            {props.title}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-hidden">
          {props.details.toString().substring(0, 150)}
        </p>
        <a
          href="/clubs/explore"
          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100 "
        >
          Explore
          <svg
            aria-hidden="true"
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>

        <a
          href="/clubs/register"
          class="fixedt bottom-0 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800 float-right"
        >
          Register
        </a>
      </div>
    </div>
    // <div class="rounded-xl shadow-lg">
    //   <div class="p-5 flex flex-col">
    //     <div class="rounded-xl overflow-hidden">
    //       <img src={props.image}> alt={props.title}</img>
    //     </div>

    //     <h5 class="text-2xl md:text-2xl font-medium mt-3">{props.title}</h5>
    //     <p class="text-slate-500 text-lg mt-3">{props.content}</p>
    //     <a
    //       href="#"
    //       className="text-center bg-blue-400 text-blue-700 py-3 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out"
    //     >Explore</a>
    //   </div>
    // </div>
  );
};

export default Club;
