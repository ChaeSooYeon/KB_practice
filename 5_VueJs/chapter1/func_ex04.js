function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = 'kim';
}

let num = 100;
let person = { name: 'chae', age: 26 };

console.log(num, person.name);
changeVal(num, person);
console.log(num, person.name);
