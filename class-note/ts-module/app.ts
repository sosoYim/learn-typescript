import { Todo } from './types';

// 타입을 하나의 파일에서 관리하는 것이 유지보수에 용이하다.

// interface Todo{
//   title: string;
//   checked: boolean;
// }

var item: Todo = {
  title: '할 일1',
  checked: false,
};
