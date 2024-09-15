// 用例
type A = If<true, 'a', 'b'> // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'

//实现
type If<T extends boolean, U, R> = T extends true ? U : R
