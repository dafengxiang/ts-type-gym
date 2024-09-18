// 用例
type arr221 = ['a', 'b', 'c', 'd']
type arr222 = [3, 2, 1]

type re1 = Pop<arr221> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr222> // expected to be [3, 2]
// 实现
type Pop<T> = T extends [...ags: infer F, infer L] ? F : never
