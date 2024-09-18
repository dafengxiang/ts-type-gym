// 用例
type replaced29 = ReplaceAll<'t y p e s', ' ', ''> // 期望是 'types'
// 实现
type ReplaceAll<
    T extends string,
    K extends string,
    V extends string
> = T extends `${infer F}${K}${infer L}` ? ReplaceAll<`${F}${V}${L}`, K, V> : T
