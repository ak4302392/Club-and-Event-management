import axios from "axios";
const url = "http://localhost:5000";
const API = axios.create({ baseURL: url });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const fetchEvents = () => API.get("/events");
export const createEvent = (newPost) => API.post("/events", newPost);
export const updateEvent = (id, updatedPost) =>
  API.patch(`/events/${id}`, updatedPost);

export const deleteEvent = (id) => API.delete(`/events/${id}`);
export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) =>
  API.post("/user/signup", formData).then((res) => console.log(res));
