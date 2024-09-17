// 用例
interface Todo17 {
    title: string
    description: string
    completed: boolean
}

const todo17: MyReadonly17<Todo17, 'title' | 'description'> = {
    title: 'Hey',
    description: 'foobar',
    completed: false,
}

todo17.title = 'Hello' // Error: cannot reassign a readonly property
todo17.description = 'barFoo' // Error: cannot reassign a readonly property
todo17.completed = true // OK

// 实现
type MyReadonly17<T, U extends keyof T> = { readonly [K in U]: T[K] } & Omit<T, U>
