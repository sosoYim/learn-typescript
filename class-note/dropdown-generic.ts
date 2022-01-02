interface DropdownItem<T> {
  value: T;
  selected: boolean;
}

// Email, ProductNumber가 큰 차이 없이 여러번 코드 중복을 일으킨다.
// 거의 유사한 다른 인터페이스 타입이 추가된다면 하위에 유니언 으로 다 지정해줬던 곳에도 다 업데이트 해줘야 한다
// 유지 보수를 위해 제네릭을 사용해보자.
// interface Email {
//   value: string;
//   selected: boolean;
// }
// interface ProductNumber {
//   value: number;
//   selected: boolean;
// }

const emails: DropdownItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProducts: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem<T>(item: DropdownItem<T>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

numberOfProducts.forEach(product => console.log(product));
