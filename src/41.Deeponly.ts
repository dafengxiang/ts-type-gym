// 实现一个泛型 `DeepReadonly<T>`，它将对象的每个参数及其子对象递归地设为只读

type DeepReadonly41<T> = {
    readonly [K in keyof T]: T[K] extends { [k: string]: any }
        ? T[K] extends Function
            ? T[K]
            : DeepReadonly41<T[K]>
        : T[K]
}

export type Expect<T extends true> = T
export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false

type cases = [
    Expect<Equal<DeepReadonly41<X1>, Expected1>>,
    Expect<Equal<DeepReadonly41<X2>, Expected2>>
]

type X1 = {
    a: () => 22
    b: string
    c: {
        d: boolean
        e: {
            g: {
                h: {
                    i: true
                    j: 'string'
                }
                k: 'hello'
            }
            l: [
                'hi',
                {
                    m: ['hey']
                }
            ]
        }
    }
}

type X2 = { a: string } | { b: number }

type Expected1 = {
    readonly a: () => 22
    readonly b: string
    readonly c: {
        readonly d: boolean
        readonly e: {
            readonly g: {
                readonly h: {
                    readonly i: true
                    readonly j: 'string'
                }
                readonly k: 'hello'
            }
            readonly l: readonly [
                'hi',
                {
                    readonly m: readonly ['hey']
                }
            ]
        }
    }
}

type Expected2 = { readonly a: string } | { readonly b: number }
