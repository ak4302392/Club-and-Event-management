export default function Explore() {
  return (
    <div class="content-center mx-auto w-full md:w-2/4 my-10  ">
      <div class="w-full rounded overflow-hidden shadow-sm  mx-auto ">
        <div class="flex md:flex-row flex-col items-center ">
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
        <div class="flex flex-col py-4 items-center">
          <h1 class="text-xl font-semibold">About the club</h1>
          <p class="py-2 md:px-0 sm:px-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}
