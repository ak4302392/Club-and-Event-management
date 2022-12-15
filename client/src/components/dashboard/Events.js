import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../clubs/Card";

export default function Event() {
  const events = useSelector((store) => store.eventReducer);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const myEvents = events.filter((e) => e.creator === user.result._id);
  return (
    <div className="grid md:grid-cols-3 md:gap-2 sm:grid-cols-2 sm:gap-2 grid-cols-1 gap-2 content-start">
      {myEvents.length ? (
        myEvents.map((e) => (
          <Card isOrganizer={true} isEvent={true} event={e} image={e.image} title={e.eventName} details={e.desc} />
        ))
      ) : (
        <p>
          You haven't created any events.<a class="underline text-blue-600" href="/create-event">Create one?</a>
        </p>
      )}
    </div>
  );
}
