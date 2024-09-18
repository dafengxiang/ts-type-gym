// 用例
type Fn = (a: number, b: string) => number

type Result30 = AppendArgument<Fn, boolean> // 期望是 (a: number, b: string, x: boolean) => number

// 实现
type AppendArgument<T extends Function, V> = T extends (...ags: infer A) => infer R
    ? (...ags: [...a: A, x: V]) => R
    : T
