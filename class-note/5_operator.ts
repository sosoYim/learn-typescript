function logMessage(value: any) {
  console.log(value);
}
logMessage(100);
logMessage('hello');

let sh: string | number | boolean;

// union 타입 : 1개 이상의 타입을 사용
function logMessage2(value: string | number) {
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  if (typeof value === 'string') {
    value.toString();
  }
  // ???
  throw new TypeError('value must be string or number');
}
logMessage2('hello');
logMessage2(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// Union 타입 : 구조체 union 속성 중 공통된 속성을 가진 타입
// 각각의 속성을 특정해주면 나머지 속성도 사용할 수 있다.
function askSomeoneUnion(someone: Developer | Person) {
  someone.name;
}

// Intersection 타입 : 구조체들의 모든 속성을 포함한 타입
function askSomeoneInt(someone: Developer & Person) {
  someone.name;
  someone.age;
  someone.skill;
}
