// 用例
const promise1 = Promise.resolve(3)
const promise2 = 42
const promise3 = new Promise<string>((resolve, reject) => {
    setTimeout(resolve, 100, 'foo')
})

// 应推导出 `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const)

// 实现
declare function PromiseAll<T>(ags: T): T extends readonly any[]
    ? {
          [K in keyof T]: T[K] extends Promise<infer I> ? I : T[K]
      }
    : T
