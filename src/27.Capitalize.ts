// 用例
type capitalized = Capitalize27<'hello world'> // expected to be 'Hello world'
// 实现
type Capitalize27<T> = T extends `${infer F}${infer L}` ? `${Uppercase<F>}${L}` : T
