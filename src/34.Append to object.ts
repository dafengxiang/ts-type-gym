// 用例
type Test34 = { id: '1' }
type Result34 = AppendToObject<Test34, 'value', 4> // expected to be { id: '1', value: 4 }

// 实现
type AppendToObject<T extends Object, A extends string, V> = {
    [K in keyof T | A]: K extends keyof T ? T[K] : V
}
