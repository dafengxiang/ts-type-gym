// 用例
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // 应推导出 'a'
type head2 = First<arr2> // 应推导出 3

// 实现
type First<T> = T extends [infer F, ...any[]] ? F : T
