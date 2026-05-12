import { useState } from "react";

function Body({ name, location, breed, children }) {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const onIncrease = () => {
    setCount(count + 1);
  };

  const handleOnChange = e => {
    setText(e.target.value);
  };

  function handleOnClick(e) {
    console.log(e.target.name);
  }

  console.log("리렌더링");

  return (
    <div>
      <button name="A 버튼" onClick={handleOnClick}>
        A 클릭!
      </button>
      <button name="B 버튼" onClick={handleOnClick}>
        B 클릭!
      </button>
      <h2>{count}</h2>
      <button onClick={onIncrease}>증가</button>
      <div>
        <input value={text} onChange={handleOnChange} />
        <div>입력한 글자: {text}</div>
      </div>
      <h2>
        {name}은 {location}에 살고 있습니다.
        <br />
        {breed.length}개의 품종이 있습니다.
      </h2>
      {children}
    </div>
  );
}

export default Body;
