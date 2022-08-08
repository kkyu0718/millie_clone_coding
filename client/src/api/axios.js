import axios from "axios";

const instance = axios.create({
  baseURL: "http://www.aladin.co.kr/ttb/api",
  params: {
    api_key: process.env.REACT_APP_ALADIN_DB_API_KEY,
    language: "ko-KR",
  },
});

export default instance;