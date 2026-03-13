async function myName(params) {
  return 'suyeon';
} //Promise 객체를 리턴
const res = await myName();
// 'await': 실행상태(성공/대기/실패)를 가지는 Promise 객체의 실행의 완료를 기다림(성공/실패).
//  async 함수 안에서만 사용 가능

console.log(myName()); //Promise{'suyeon'}
console.log(res); // suyeon
