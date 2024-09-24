type Foo = {
    a: string
    b: number
}
type Bar = {
    a: string
    c: boolean
}

type Result391 = Diff<Foo, Bar> // { b: number, c: boolean }
type Result392 = Diff<Bar, Foo> // { b: number, c: boolean }

type Diff<T, U> = {
    [K in keyof (T & U) as K extends keyof (T | U) ? never : K]: (T & U)[K]
}
