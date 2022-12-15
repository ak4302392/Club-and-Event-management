import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getEvents } from "../../actions/events";
import Clubs from "../clubs/Clubs";
import Events from "../evnts/Events";

export default function Home() {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getEvents());
  }, [ dispatch]);
  return (
    <>
      <Clubs  />
      <Events />
    </>
  );
}
