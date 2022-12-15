import { Link, useLocation, useParams } from "react-router-dom";

export default function Explore() {
  const location = useLocation();
  const { event } = location.state;
  return (
    <div class="content-center mx-auto w-full md:w-2/4 my-10  ">
      <div class="w-full rounded overflow-hidden shadow-sm  mx-auto ">
        <div class="flex md:flex-row flex-col items-center ">
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
            <p class="text-gray-700 text-base ">Number of members: 100+</p>
            <p class="text-gray-700 text-base ">
              Office Address: NTB Room no - TA-314
            </p>
            <Link
              to="/clubs/register"
              state={{ event: event }}
              class="fixedt bottom-0 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
            >
              Register
            </Link>
          </div>
        </div>
        <div class="flex flex-col py-4 items-center">
          <h1 class="text-xl font-semibold">About </h1>
          <p class="py-2 md:px-0 sm:px-10">{event.desc}</p>
        </div>
      </div>
    </div>
  );
}
