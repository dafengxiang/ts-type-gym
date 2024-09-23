// 用例
type foo = {
    name: string
    age: string
}

type coo = {
    age: number
    sex: string
}

type Result37 = Merge<foo, coo> // expected to be {name: string, age: number, sex: string}
// 实现
type Merge<T extends Object, U extends Object> = {
    [K in keyof T | keyof U]: K extends keyof T ? T[K] : K extends keyof U ? U[K] : never
}
