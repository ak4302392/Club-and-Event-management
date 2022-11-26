import Intro from "./Intro";

export default function AboutUs() {
  return (
    <div className="text-center">
      <div class="container flex justify-center mx-auto pt-16">
        <div>
          <p class="text-gray-500 dark:text-gray-200 text-lg text-center font-normal pb-3">
            BUILDING TEAM
          </p>
          
        </div>
      </div>
      <div class="w-full bg-gray-100 dark:bg-gray-800 px-10 pt-10">
        <div class="container mx-auto">
          <div
            role="list"
            aria-label="Behind the scenes People "
            class="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
          >
            <Intro image="" name="Mansi Hussain" role="" />
            <Intro image="" name="Sirus Shah" role=""/>
            <Intro image="" name="Peter Biju" role =""/>
            <Intro image="" name="Amit Kumar" role="" />
          </div>
        </div>
      </div>
    </div>
  );
}
