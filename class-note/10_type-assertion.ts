// 타입 단언(type assertion)
// 타입은 개발자가 잘 알고 있으니 신경쓰지 말아라
var aaaa;
aaaa = 20;
aaaa = 'a';
var b = aaaa as string;

// DOM API 조작
// HTMLDivElement | null 값을 가질 수 있다.
// as 를 붙여주면 무조건 HTMLDivElement일 것으로 단언을 하는 것이다.
var div = document.querySelector('div') as HTMLDivElement;
// 보통은 div가 null이 아닌지 살펴본다.
if (div) {
  div.innerText;
}
// 단언을 하면 조건을 안 걸러줘도 된다.
div.innerText;
