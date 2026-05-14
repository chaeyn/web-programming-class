import { useState } from "react";

function Body({ name, location, breed, children }) {
  const [state, setState] = useState({
    username: "",
    gender: "",
    birth: "",
    bio: "",
  });

  const handleOnChange = e => {
    const { name, value } = e.target;

    console.log(`현재 수정 대상: ${name}`);
    console.log(`수정 값: ${value}`);

    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div>
      <div>
        <input
          name="username"
          value={state.username}
          onChange={handleOnChange}
          placeholder="이름"
        />
      </div>
      <div>
        <select name="gender" value={state.gender} onChange={handleOnChange}>
          <option value="" />
          <option value="남성">남성</option>
          <option value="여성">여성</option>
        </select>
      </div>
      <div>
        <input name="birth" type="date" value={state.birth} onChange={handleOnChange} />
      </div>
      <div>
        <textarea name="bio" value={state.bio} onChange={handleOnChange} />
      </div>
    </div>
  );
}

export default Body;
