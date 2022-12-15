import { useSelector } from "react-redux";
import Card from "../clubs/Card";

const Events = () => {
  const events = useSelector((store) => store.eventReducer);
  return (
    <div className="md:px-40 md:py-5 sm:px-20 sm:py-2 px-10 py-1 ">
      <h1 className=" text-2xl text-lg font-bold text-gray-700  py-5 ">
        Events
      </h1>
      <div className="grid md:grid-cols-3 md:gap-2 sm:grid-cols-2 sm:gap-2 grid-cols-1 gap-2 content-start">
        {events.map((e) => (
          <Card  isEvent={true} event={e} image={e.image} title={e.eventName} details={e.desc} />
        ))}
      </div>
    </div>
  );
};

export default Events;
