/* 회원가입 페이지
  1. 먼저 로그인 페이지를 화면에 보여준다.
  2. 로그인 페이지에는 아이디(이메일) 입력창과 비밀번호 입력창이 있다.
  3. 입력 창 밑에는 로그인 버튼이 있다.  가외에 조그마한  아이디 저장 체크박스가 있다.
  4. 맨 밑에는 아이디 찾기, 비밀번호 찾기, 회원가입 버튼이 있다.
 */
import './App.css';
function App() {

  return (
    <div className="content">
      <div className="login">로그인</div>
      <form>
        <div className="panel">
          <div id="id_line_wrap">
            <input id="id"type="text"/>
          </div>
          <div id="passwd_line_wrap">
          <input id="pw" type="password"/>
          </div>
          <div>
            <button>로그인</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
