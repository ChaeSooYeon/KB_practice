//EX) 회원가입 시나리오
//1. 회원가입 API 호출되면 DB에 회원 정보 저장
//2. 이메일을 보내고
//3. 성공메시지 출력
// Promise객체로 작성
const db = [];

function saveDB(user) {
  // const oldDBSize = db.length;
  const oldDBSize = db.length + 1; //에러발생시킴
  db.push(user);
  console.log(` save ${user.name} to DB`);

  return new Promise((resolve, reject) => {
    //콜백 대신 Promise 객체 반환
    if (db.length > oldDBSize) {
      resolve(user); //성공 시 유저 정보를 반환
    } else {
      reject(new Error('Save DB Error!')); //실패 시 에러 발생
    }
  });
}

function sendEmail(user) {
  console.log(`email to ${user.email}`);
  return new Promise((resolve) => {
    resolve(user);
  });
}

function getResult(user) {
  return new Promise((resolve, reject) => {
    resolve(`success register ${user.name}`);
  });
}

function registerByPromise(user) {
  //비동기 호출이지만 순서를 지켜서 실행됨
  const result = saveDB(user).then(sendEmail).then(getResult);

  console.log(result); //아직 완료 되지 않았으므로 지연(pending) 상태
  return result;
}

const user = { name: 'kim', email: 'abc@email.com' };
// const result = registerByPromise(user);
const result = Promise.all([saveDB(user), sendEmail(user), getResult(user)])
  .catch((err) => new Error(err))
  .finally(() => console.log('완료')); //넘긴 배열의 순서대로 실행

//결과가 promise 객체이므로 then()메서드에 함수를 넣어서 결괏값 출력
result.then(console.log);
