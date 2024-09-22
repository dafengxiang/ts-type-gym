// 用例
type StringLength<T extends string, U extends any[]> = T extends `${infer F}${infer L}`
    ? StringLength<L, [F, ...U]>
    : U['length']
// 实现
type length = StringLength<'123', []>
