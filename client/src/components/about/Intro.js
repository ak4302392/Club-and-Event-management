export default function Intro(props) {
  return (
    <div
      role="listitem"
      class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
    >
      <div class="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
        <div class="absolute -mt-20 w-full flex justify-center">
          <div class="h-32 w-32">
            <img
              src={props.image}
              alt={props.name}
              role="img"
              class="rounded-full object-cover h-full w-full shadow-md"
            />
          </div>
        </div>
        <div class="px-6 mt-16">
          <h1 class="font-bold dark:text-white text-3xl text-center mb-1">
            {props.name}
          </h1>
          <p class="text-gray-800 dark:text-white text-sm text-center">
            {props.role}
          </p>
          <p class="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">
            {props.desc}
          </p>
          <div class="w-full flex justify-center pt-5 pb-5">
            <a href={props.githubLink} class="mx-5">
              <div aria-label="Github" role="img">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg"
                  alt="github"
                />
              </div>
            </a>
            <a href={props.twitterLink} class="mx-5">
              <div aria-label="Twitter" role="img">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg"
                  alt="twitter"
                />
              </div>
            </a>
            <a href={props.instaLink} class="mx-5">
              <div aria-label="Instagram" role="img">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg"
                  alt="instagram"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
