function waitOneSecond(message) {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(`${message}`);
    }, 1000);
  });
} //1초 대기하고 전달 받은 메시지 출력

async function CountOneToTen() {
  //10초 동안 1초마다 숫자메시지를 출력
  for (let number of [...Array(10).keys()]) {
    let result = await waitOneSecond(`${number + 1}초 대기중 ....`);
    console.log(result);
  }
  console.log('카운트 완료');
}

CountOneToTen();
