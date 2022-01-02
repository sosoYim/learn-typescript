// 이넘 :  특정 값들의 집합을 의미하는 자료형
// 초기값을 Nike=10 처럼 주지 않으면 0부터 1씩 증가하여 값이 지정된다.
// 문자열로 지정이 가능하다.
enum Shoes {
  Nike = '나이키',
  Adidas = '아디다스',
}

var myShoes = Shoes.Nike;
console.log(myShoes);

enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) console.log('정답');
  if (answer === Answer.No) console.log('오답');
}

// enum에서 정의한 값만 호출할 수 있다.
askQuestion('no');
askQuestion('N');
askQuestion(Answer.No);
