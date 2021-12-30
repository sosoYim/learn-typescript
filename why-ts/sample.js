// 자바스크립트를 사용하여 ts 접목

// @ts-check
/**
 *
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 * @returns
 */
function sum(a, b) {
  return a + b;
}
sum(10, '20');
// 에러를 알려주지는 않는다.
// ts-check를 설정하면 에러 알려 줌.
