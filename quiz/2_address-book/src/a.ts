// function fetchItems():string[] {
//   var items = ['a', 'b', 'c'];
//   return items;
// }

// 프로미스는 기본적으로 제네릭으로 타입을 지정한다.
function fetchItems(): Promise<string[]> {
  var items: string[] = ['a', 'b', 'c'];
  return new Promise(function (resolve) {
    resolve(items);
  });
}

let result = fetchItems();
