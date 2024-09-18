// 用例
interface Cat {
    type: 'cat'
    breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
    type: 'dog'
    breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
    color: 'brown' | 'white' | 'black'
}

type MyDog = LookUp<Cat | Dog, 'cat'> // expected to be `Dog`

// 实现
interface MyClass {
    type: string
    [key: string]: any
}

type GetClass<C extends MyClass, T extends string> = C extends { type: infer S }
    ? T extends S
        ? C
        : never
    : never

type LookUp<U extends MyClass, T extends string> = U extends any ? GetClass<U, T> : never
