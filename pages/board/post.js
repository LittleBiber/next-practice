import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Post() {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const router = useRouter();

  const onClick = async () => {
    const result = await axios.post("http://localhost:8000/blogs", {
      title,
      description,
      // userId: 1, cookie에서 추출하는걸로 변경
    });
    router.replace("/board");
    // replace와 push 의 차이점 https://soft91.tistory.com/97
  };

  return (
    <>
      <h1>게시글 작성</h1>
      <div>
        <input placeholder="제목" onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <textarea
          placeholder="내용"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div>
        <button onClick={onClick}>전송</button>
      </div>
    </>
  );
}
