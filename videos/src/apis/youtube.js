import axios from "axios";

const KEY = "AIzaSyDaDFG4s6ThnYS7BBy7RwDxvcRepWVAIjg";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
