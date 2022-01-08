// 타입 가드 is

interface Developper {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developper | Person {
  return { name: 'Tody', skill: 'skill', age: 33 };
}

var tony = introduce();
console.log(tony.skill); // name만 가능

// 이 방법은 가독성이 좋지 않다.
// 이 대신 '타입 가드' 방식을 사용한다.
if ((tony as Developper).skill) {
  var skill = (tony as Developper).skill;
  console.log(skill);
} else if ((tony as Person).age) {
  var age = (tony as Person).age;
  console.log(age);
}

// 타입 가드***
function isDeveloper(target: Developper | Person): target is Developper {
  return (target as Developper).skill !== undefined;
}

if (isDeveloper(tony)) {
  tony.skill;
} else {
  tony.age;
}
