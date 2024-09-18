// 用例
type replaced = Replace<'types are fun!', 'fun', 'awesome'> // 期望是 'types are awesome!'

// 实现
type Replace<
    T extends string,
    K extends string,
    V extends string
> = T extends `${infer F}${K}${infer L}` ? `${F}${V}${L}` : T
