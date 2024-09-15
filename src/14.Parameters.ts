const foo = (arg1: string, arg2: number): void => {}

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]

type MyParameters<T> = T extends (...ags: infer I) => any ? I : never
