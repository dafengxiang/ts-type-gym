// 用例
type Result13 = Unshift<[1, 2], 0> // [0, 1, 2]
// 实现
type Unshift<T extends any[], U> = T extends [...ags: infer I] ? [U, ...I] : never
