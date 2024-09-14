// 用例
type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
// 实现
type MyExclude<T, U extends T> = T extends U ? never : T
