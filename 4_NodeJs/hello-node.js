const http = require('http'); //http객체 생성
const { setTimeout } = require('timers/promises');

let count = 0;

//노드 서버 객체
const server = http.createServer((req, res) => {
  console.log('my server');
  console.log((count += 1));

  res.statusCode = 200; //OK
  res.setHeader('ContentType', 'text/plain');
  res.write('hello\n');

  setTimeout(() => {
    res.end('Node.js');
  }, 2000);
});

server.listen(8000, () => console.log('listen')); //서버 실행 listen(포트번호)
