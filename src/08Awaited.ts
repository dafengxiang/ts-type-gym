type ExampleType = Promise<string>

type Result8 = MyAwaited<ExampleType> // string

type MyAwaited<T> = T extends Promise<infer R> ? R : T
