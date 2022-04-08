import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000"; // 서버주소
axios.default.withCredentials = true;

const fetcher = async (method, url, ...rest) => {
  const res = await axios[method](url, ...rest);
  return res.data;
};

export default fetcher;

// 나중에 GraphQL로 마이그레이션 해보기
