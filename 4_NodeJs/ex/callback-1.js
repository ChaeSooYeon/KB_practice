const order = (result, callback) => {
  setTimeout(() => {
    callback(result);
  }, 3000);
};
const display = (result) => {
  console.log(`${result} 완료!`);
};
order('americano', display);
