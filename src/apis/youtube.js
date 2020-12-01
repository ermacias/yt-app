import axios from "axios";

const KEY = "AIzaSyBFiWclo7pSk9NKjXPhH8J3vlFFxmOtcIo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
