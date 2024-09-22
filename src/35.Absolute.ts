// 用例
type Test35 = -100
type Result35 = Absolute<Test35> // expected to be "100"
// 实现
type Absolute<T extends string | number> = `${T}` extends `-${infer N}` ? N : T
