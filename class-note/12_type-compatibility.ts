// 타입 확장 : 컴파일 이전에 확실히 체크할 수 있는 타입들만 인정
// 포함할 수 있어야 한다.
interface Developer {
  name: string;
}
interface Person {
  name: string;
  age2: 20;
}

var developer: Developer;
var person: Person;

// 더 큰(포함할 수 있는) 단위가 더 작은 단위 타입을 할당받을 수 있다.
developer = person; // OK
// person = developer; // error

var add = function (a: number) {
  // ...
};

var sum = function (a: number, b: number) {
  // ...
};

sum = add;
// add = sum; // error

// 제네릭
interface Empty<T> {}

var empty1: Empty<string>;
var empty2: Empty<number>;

empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;

// error: 서로 다른 타입을 가졌으므로 에러
notempty1 = notempty2;
notempty2 = notempty1;
