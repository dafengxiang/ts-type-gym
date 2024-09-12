// 用例
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
// 实现
type TupleToObject<T extends readonly string[]> = {
    [K in T[number]]: K
}
