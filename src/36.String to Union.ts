// 用例
type Test36 = '123'
type Result36 = StringToUnion<Test36> // expected to be "1" | "2" | "3"

// 实现
type StringToUnion<T extends string> = T extends `${infer F}${infer L}`
    ? F | StringToUnion<L>
    : never
