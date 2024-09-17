// 用例
type X = {
    x: {
        a: 1
        b: 'hi'
    }
    y: 'hey'
}

type Expected = {
    readonly x: {
        readonly a: 1
        readonly b: 'hi'
    }
    readonly y: 'hey'
}

type Todo18 = DeepReadonly<X> // should be same as `Expected`

// 实现
type DeepReadonly<T> = T extends Object ? { readonly [K in keyof T]: DeepReadonly<T[K]> } : T
