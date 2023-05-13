// 아이디, 비밀번호 형식이 올바른지 확인 하는 함수
// 올바르면 true, 아니면 false를 반환한다.

function checkId (id) {
  //아이디는 이메일 형식으로 되어 있어야 한다.
  const regExp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+$/;
    return regExp.test(id);
}

function checkPw (pw) {
  //비밀번호는 8자리 이상이고 반드시 숫자와 문자가 하나씩 있어야 한다.
  const regExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
  return regExp.test(pw);
}
// 모듈로 만들어서 다른 파일에서 사용할 수 있도록 한다.
module.exports = {checkId, checkPw};