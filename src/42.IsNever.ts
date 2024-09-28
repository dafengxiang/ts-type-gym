// 用例
type A42 = IsNever<never> // expected to be true
type B42 = IsNever<undefined> // expected to be false
type C = IsNever<null> // expected to be false
type D = IsNever<[]> // expected to be false
type E = IsNever<number> // expected to be false
// 实现
type IsNever<T> = [T] extends [never] ? true : false
