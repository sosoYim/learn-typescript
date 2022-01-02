class Person {
  private names: string;
  public age: number;
  readonly log: string;

  constructor(name: string, age: number) {
    this.names = name;
    this.age = age;
  }
}

// 리액트 최신 문법이 클래스기반에서 훅 기반의 함수형 코드로 변했다.
// 클래스를 자주 보진 않을 것
