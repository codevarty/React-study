import Button from './Button';
import styles from './App.module.css';
import { useState } from "react";

function App() {
  // state가 변경 될 때 마다 컴포넌트가 리렌더링 된다.
  // 즉 이 함수가 실행되는 것이다.
  const [count, setCount] = useState(0);
  const onClick= () => setCount((prev) => prev + 1);
  // console.log("render"); //state가 변경될 때 마다 실행된다.
  return (
    <div>
      <h1>{count}</h1>
      <Button onClick={onClick} text={"Click me"} />
    </div>
  );
}

export default App;
