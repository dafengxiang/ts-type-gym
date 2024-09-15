// 用例
type Result12 = Push<[1, 2], '3'> // [1, 2, '3']
// 实现
type Push<T extends any[], U> = T extends [...ags: infer I] ? [...I, U] : never
