// 타입 추론
let a = 10;

function getB(b = 10) {
  var c = 'hi';
  return b + c;
}

// interface Dropdown<T> {
//   value: T;
//   title: string;
// }
// var shoppingItem: Dropdown<string> = {
//   value: 'abc',
//   title: 'hello',
// };

// 인터페이스와 제네릭을 이용한 타입추론
interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<T> extends Dropdown<T> {
  description: string;
  tag: T;
}

var detailedItem: DetailedDropdown<string> = {
  title: 'abc',
  description: 'ab',
  value: 'a',
  tag: 'g',
};

// Best Common Type : 타입스크립트가 어떤 타입을 추론해가는 알고리즘
var arr = [1, 2, true];

// Typescript Language Server
// LSP
// vsl 의 관련 아티클 참고
