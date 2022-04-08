import { useState } from "react";
import fetcher from "../../fetcher";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    if (!email || !password) return alert("입력한 내용을 확인하세요");

    try {
      const result = await fetcher("post", "/users/signin", {
        email,
        password,
      });
      console.log(result);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <h1>로그인</h1>
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
        <button onClick={login}>로그인</button>
      </div>
    </>
  );
}
