//EX) 회원가입 시나리오
//1. 회원가입 API 호출되면 DB에 회원 정보 저장
//2. 이메일을 보내고
//3. 성공메시지 출력

const db = [];

/* 콜백방식으로 작성 */
//회원가입 API 함수
function register(user) {
  return saveDB(user, (user) => {
    return sendEmail(user, (user) => {
      return getResult(user);
    });
  });
}

/* Promise객체 방식 */
function registerByPromise(user) {
  const result = saveDB(user).then(sendEmail).then(getResult);
  console.log(result);
  return result;
}

// 가입요청한 회원의 정보를 저장하는 API함수
function saveDB(user, callback) {
  db.push(user);
  console.log(`save ${user.name} to DB`);
  return callback(user);
}
// 회원의 정보를 저장 후 회원에게 이메일 전송
function sendEmail(user, callback) {
  console.log(`send to ${user.email}`);
  return callback(user);
}
// 회원에게 가입 성공 메시지 보여주기
function getResult(user) {
  return `success register ${user.name}`;
}

const user = { name: 'kim', email: 'abc@email.com' };
const result = register(user);

console.log(result);
