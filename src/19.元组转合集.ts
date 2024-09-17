// 用例
type Arr = ['1', '2', '3']

type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
// 实现
type TupleToUnion<T> = T extends (infer I)[] ? I : T
