// 用例
declare const config: Chainable

const result = config
    .option('foo', 123)
    .option('name', 'type-challenges')
    .option('bar', { value: 'Hello World' })
    .get()

// 期望 result 的类型是：
interface Result20 {
    foo: number
    name: string
    bar: {
        value: string
    }
}
// 实现
type Chainable = {
    option(...ags: any[]): Chainable
    get(...ags: any[]): Result20
}
