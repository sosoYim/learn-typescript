interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
const seho: User = {
  age: 33,
  name: 'seho',
};

// 함수에 인터페이스 활용 ***중요***
function getUser(user: User) {
  console.log(user);
}

const capt = {
  name: '캡틴',
  age: 10,
};
getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

var sum: SumFunction;
sum = function (a: number, b: number): number {
  return a + b;
};

// 인덱싱
interface StringArray {
  [index: number]: string;
}

var arr2: StringArray = ['a', 'b', 'c'];
arr2[0];

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}
var obj2: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
};

Object.keys(obj).forEach(value => console.log(value));

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developper extends Person {
  language: string;
}

var capt2: Developper = {
  language: 'ts',
  age: 10,
  name: 'haha',
};
