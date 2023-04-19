// import Button from './Button';
// import styles from './App.module.css';
import { useState, useEffect} from "react";

function App() {
  // state가 변경 될 때 마다 컴포넌트가 리렌더링 된다.
  // 즉 이 함수가 실행되는 것이다.
  const [count, setCount] = useState(0);
  const onClick= () => setCount((prev) => prev + 1);
  console.log('I run all the time') // 버튼을 클릭할 때 마다 실행
  useEffect(() => {
    console.log('I run only once') // 한 번만 실행
  },[]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
