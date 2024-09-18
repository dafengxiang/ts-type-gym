// 用例
type trimed = TrimLeft<'  Hello World  '> // 应推导出 'Hello World  '
// 实现
type TrimLeft<T> = T extends ` ${infer I}` ? TrimLeft<I> : T
