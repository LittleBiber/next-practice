import { useEffect, useState } from "react";
import fetcher from "../../fetcher.js";
import BlogList from "../../components/blogList";

export default function Board() {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    const blogs = await fetcher("get", "/blogs");
    setBlogs(blogs.reverse());
  };

  useEffect(() => {
    // useEffect에는 비동기 직접 설정하면 안됨ㅡㅡ
    getBlogs();
  }, []);

  return (
    <>
      <h1>Board</h1>
      <BlogList blogs={blogs} />
    </>
  );
}
// 폴더이름으로 페이지 라우팅하려면 그냥 index.js로 작성
