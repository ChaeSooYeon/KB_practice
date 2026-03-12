let getTriangle = (base, height) => {
  return (base * height) / 2;
};
console.log('삼각형의 면적 :' + getTriangle(5, 2));

// 화살표 함수(람다함수, 익명함수)
let getTriangle1 = (base, height) => (base * height) / 2;

// ** 화살표 함수는 this의 해석이 달라짐
//
