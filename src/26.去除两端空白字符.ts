// 用例
type trimed26 = Trim<'  Hello World  '> // expected to be 'Hello World'
// 实现
type Trim<T extends string> = T extends ` ${infer I}` | `${infer I} ` ? Trim<I> : T
