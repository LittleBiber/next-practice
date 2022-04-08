import { useState } from "react";
import fetcher from "../../fetcher";
import { useRouter } from "next/router";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setNickname] = useState("");
  const router = useRouter();

  const signup = async () => {
    if (!email || !password || !username)
      return alert("입력한 내용을 확인하세요");

    try {
      const result = await fetcher("post", "/users/signup", {
        email,
        password,
        username,
      });
      alert(`${result} 회원가입 완료`);
      router.replace("/board");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <h1>회원가입</h1>
      <div>
        <input
          placeholder="E-Mail"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <input
          placeholder="Nickname"
          onChange={(e) => setNickname(e.target.value)}
        />
      </div>
      <div>
        <button onClick={signup}>회원가입</button>
      </div>
    </>
  );
}
