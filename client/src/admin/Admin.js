import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrganizer } from "../actions/organizer";

export default function Admin() {
  // const user = JSON.parse(localStorage.getItem("profile"));
  // const dispatch = useDispatch();
  // dispatch(getAllOrganizer(user));
  // const events = useSelector((store) => store.eventReducer);
  const organizers = useSelector((store) => store.organizerReducer);
  console.log(organizers);
  return (
    <table class="table-auto">
      <thead>
        <tr>
          <th>Song</th>
          <th>Artist</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
       
      </tbody>

      
    </table>
  );
}
