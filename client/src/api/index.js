import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const createQuiz = (newQuiz) => API.post("/quiz/create", newQuiz);
export const fetchQuizzes = () => API.get("/quiz/findAll");
export const fetchCreatorQuizzes = () => API.get("/quiz/findAllCreatorQuizzes");

export const fetchQuiz = (id) => API.get(`/quiz/findOne/${id}`);

export const fetchUserResponses = () => API.get("/quiz/findAllUserResponses");

export const responseQuiz = (newResponse) =>
  API.post("/quiz/reply", newResponse);

export const signIn = (formData) => API.post("/auth/signin", formData);
export const signUp = (formData) => API.post("/auth/signup", formData);
