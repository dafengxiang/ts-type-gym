// 用例
type arr21 = ['a', 'b', 'c']
type arr22 = [3, 2, 1]

type tail1 = Last<arr21> // 应推导出 'c'
type tail2 = Last<arr22> // 应推导出 1
// 实现
type Last<T extends any[]> = T extends [...ags: any[], infer L] ? L : T
