// 用例
interface Todo16 {
    title: string
    description: string
    completed: boolean
}

type TodoPreview16 = MyOmit<Todo16, 'description' | 'title'>

const todo16: TodoPreview16 = {
    completed: false,
}

// 实现
type MyOmit<T, U extends keyof T> = { [K in keyof T as K extends U ? never : K]: T[K] }
