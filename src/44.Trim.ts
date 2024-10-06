// 实现`Trim<T>`，它接受一个明确的字符串类型，并返回一个新字符串，其中两端的空白符都已被删除。

export type Expect<T extends true> = T
export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false
/* _____________ 测试用例 _____________ */
// import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Trim<'str'>, 'str'>>,
    Expect<Equal<Trim<' str'>, 'str'>>,
    Expect<Equal<Trim<'     str'>, 'str'>>,
    Expect<Equal<Trim<'str   '>, 'str'>>,
    Expect<Equal<Trim<'     str     '>, 'str'>>,
    Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
    Expect<Equal<Trim<''>, ''>>,
    Expect<Equal<Trim<' \n\t '>, ''>>
]
type Trim<S extends string> = S extends
    | ` ${infer C}`
    | `${infer C} `
    | `\n${infer C}`
    | `${infer C}\n`
    | `\t${infer C}`
    | `${infer C}\t`
    ? Trim<C>
    : S
