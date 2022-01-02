// // 함수 정의 => 파라미터를 받아 출력

// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(555);
// logText(true);
// logText('hi');

// function logText2<T>(text: T): T {
//   console.log(text);
//   return text;
// }
// // 함수에 값을 넘겨줄 때 타입을 같이 넘김
// logText2<string>('hii');

// 문제1. : 단순히 타입을 위해서 중복된 코드를 사용하는 것은 좋지 않다.
// function logText3(text: string) {
//   console.log(text);
//   text.split('').reverse().join('');
//   return text;
// }

// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

// 문제2. : 유니온으로 선언하면 string, number 둘 모두에게 사용 가능한 메서드만 쓸 수 있다.
// function logText(text: string | number) {
//   console.log(text);
//   return text;
// }
// logText('a');
// logText(10);

// 제네릭으로 해결 : 호출시 타입을 지정하고 그를 추론하여 함수의 리턴값까지 지정된다.
function logText<T>(text: T): T {
  console.log(text);
  return text;
}
const strr = logText<string>('ddd');
strr.split('');
const flag = logText<boolean>(true);

// 인터페이스에 제네릭 선언하기
interface Dropdown<T> {
  value: T;
  selected: boolean;
}

// 제네릭의 타입 제한1 : 타입에 대한 힌트 주기
// function logTextLength<T>(text: T[]): T[] {
//   const result = text.length;
//   return Array(result).fill(0);
// }

// logTextLength<string>(['hi']);

// 제네릭 타입 제한 2 - 정의된 인터페이스 타입 이용하기
interface LengthType {
  length: number;
}
function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
// logTextLength(10);
logTextLength({ length: 0 });

// 제네릭 타입 제한 3 : keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  // ShoppingItem 중 하나의 "key"를 사용한다.
  return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption('name');
