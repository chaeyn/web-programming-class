import { useEffect, useState } from "react";
import { Controller } from "./components/Controller.jsx";
import { Viewer } from "./components/Viewer.jsx";

function App() {
  const [count, setCount] = useState(0);

  const handleSetCount = value => {
    setCount(count + value);
  };

  // useEffect: 컴포넌트의 생명주기 관리
  useEffect(() => {
    console.log(`count 값 업데이트: ${count}`);
    /**
     * 실행 타이밍으로,
     * 1. 마운트 (처음 화면에 그려짐) 되었을 때: "count 값 업데이트: 0" 출력
     * 2. 업데이트 (버튼 클릭으로 count 변경) 될 때마다: 최신 count 값 출력
     */
  }, [count]); // 의존성 배열 (deps): count가 업데이트될 때 마다 effect 함수 재실행하라는 뜻 내포

  return (
    <div className="App">
      <h1>심플 카운터</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
