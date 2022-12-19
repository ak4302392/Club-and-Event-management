import { useState } from "react";
import { useSelector } from "react-redux";
import { ORGANIZER } from "../../constants/actionTypes";
import Card from "../clubs/Card";
import Event from "./Events";

export default function Dashboard() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const events = useSelector((store) => store.eventReducer);
  const regEvents = events.filter((e) =>
    e.participants.map((p) => p.id === user.result._id)
  );
  console.log(regEvents);
  return (
    <div className="md:px-40 md:py-3 sm:px-20 sm:py-2 px-10 py-1 ">
      {user.result.userType === ORGANIZER ? (
        <div>
          <h1 className="pb-5 text-2xl text-lg font-bold text-gray-700   ">
            Your Events
          </h1>
          <Event />
        </div>
      ) : (
        <></>
      )}
      <h1 className="pb-5 pt-5 text-2xl text-lg font-bold text-gray-700   ">
        Registered Events
      </h1>
      <div className="grid md:grid-cols-3 md:gap-2 sm:grid-cols-2 sm:gap-2 grid-cols-1 gap-2 content-start">
        {regEvents.map((e) => (
          <Card
            isOrganizer={true}
            isEvent={true}
            event={e}
            image={e.image}
            title={e.eventName}
            details={e.desc}
            isReg={true}
          />
        ))}
      </div>
    </div>
  );
}
