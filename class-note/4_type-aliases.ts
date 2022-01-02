interface Person {
  name: string;
  age: number;
}

// type Person = {
//   name: string;
//   age: number;
// };

var seho2: Person = {
  name: '세호',
  age: 30,
};

type MyString = string;
var str: MyString = 'hello';

// 인터페이스와 타입 별칭 차이
// - 타입은 확장이 불가능하다.
// - 가급적이면 타입 말고 인터페이스를 사용하라고 공홈에서 언급
