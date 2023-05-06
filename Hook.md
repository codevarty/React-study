# React Hook
## 정의
- React Hook은 React 16.8 버전에 새로 추가된 기능이다.
- 함수형 컴포넌트에서도 성태 관리를 할 수 있도록 해준다.

## 특징
- 함수형 컴포넌트에서도 상태 관리를 할 수 있다.
- 코드의 가독성과 재사용성을 높여준다.
- useState를 이용하여 상태관리가 가능하다.
- useEffect를 이용하여 생명주기에 따른 작업 처리가 가능해 진다.(mount 될 때, unmount 될 때, update 될 때, 상태가 변경될 때 등)

## Hook의 종류
- useState
- useEffect
- useContext
- useReducer
- useMemo
- useCallback
- useRef

## useState
- 가장 기본적인 Hook
- 함수형 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해준다.
- 반환값은 배열 형태로 상태와, 그 상태를 변경하는 함수이다.
- useState는 여러번 사용이 가능하다.
- 예제 코드
  ```javascript
  import React, { useState } from 'react';

  const Counter = () => {
    const [value, setValue] = useState(0); //초기값 0 지정
    return (
      <div>
        <p>
          현재 카운터 값은 <b>{value}</b>입니다.
        </p>
        // 버튼 클릭시 value의 값이 1증가한다.
        <button onClick={() => setValue(value + 1)}>+1</button>
        //버튼 클릭시 value의 값이 1감소한다.
        <button onClick={() => setValue(value - 1)}>-1</button>
      </div>
    );
  }
  ```
  App.js
  ```javascript
  import React from 'react';
  import Counter from './Counter';
  const App = ()=> {
    //Counter 컴포넌트를 불러온다.
    return <Counter />;
  }
  export default App;
  ```
## useEffect
- 리엑트 컴포넌트가 랜더링 될 떄 특정 작업을 수행하는 Hook
- 예제 코드
  ````javascript
  import React, { useState, useEffect } from 'react';

  const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    useEffect(() => {
      // 랜더링이 완료된 후 실행 된다.
      console.log('렌더링이 완료되었습니다!');
      console.log({
        name,
        nickname
      });
    });

    const onChangeName = e => {
      setName(e.target.value);
    };

    const onChangeNickname = e => {
      setNickname(e.target.value);
    };

    return (
      (...)
    );
  };

  export default Info;
  ````
- 마운트(초기 랜더링) 때만 실행
  - mount : 컴포넌트가 처음 나타날 때(초기 랜더링)
  - unmount : 컴포넌트가 사라질 때
  ```javascript
  useEffect(() => {
    console.log('마운트 될 때만 실행됩니다.');
  }, []); //두번째 인자는 변경되는 값이 들어간다.
  // 빈 배열([])일 경우 마운트 될 때만 실행된다.
  ```
- 특정 값이 업데이트 될 때마다 실행
  ```javascript
  useEffect(() => {
    console.log(name);
  }, [name]); //name 값이 변경될 때마다 실행된다.
  ```
- 언마운트 또는 업데이트 직전에 실행
  ````javascript
  useEffect(() => {
    //컴포넌트가 랜더링 될 때 실행
    console.log('effect');
    console.log(name);
    // cleanup 함수
    // 언마운트 또는 업데이트 직전에 실행된다.
    return () => {
      console.log('cleanup');
      console.log(name);
    };
  });
  ````
## useContext
- 함수형 컴포넌트에서 Context를 편하게 사용할 수 있게 해준다.
- 예제 코드
  ```javascript
  import React, { createContext, useContext } from 'react';

  const ThemeContext = createContext('black');

  const ContextSample = () => {
    //스타일의 값을  변경할 때 주로 사용된다.
    const theme = useContext(ThemeContext);
    const style = {
      width: '24px',
      height: '24px',
      background: theme
    };
    return <div style={style} />;
  };

  export default ContextSample;
  ```