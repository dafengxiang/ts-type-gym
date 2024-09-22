// 用例
type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]

// 实现
type Flatten<S extends any[], T extends any[] = []> = S extends [infer F, ...infer L]
    ? F extends any[]
        ? Flatten<L, Flatten<F, T>>
        : Flatten<L, [...T, F]>
    : T
