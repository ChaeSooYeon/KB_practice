// 1. 함수선언문으로 정의하여 호출
function foo() {
  console.log('foo');
}
let foo2 = foo; //식별자
foo();
foo2(); // 'foo2'라는 식별자로 호출
// 2. 함수 리터럴 표현식으로 함수 호출 - IIFE구조 (매크로에서 활용)
(function bar() {
  console.log('bar');
})();
// 3. 화살표 함수
const add = (x, y) => {
  console.log(x + y);
};
add(1, 2);
