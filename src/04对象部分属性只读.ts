// 用例
interface Todo4 {
    title: string
    description: string
    completed: boolean
}

const todo4: MyReadonly4<Todo4, 'title' | 'description'> = {
    title: 'Hey',
    description: 'foobar',
    completed: false,
}

todo4.title = 'Hello' // Error: cannot reassign a readonly property
todo4.description = 'barFoo' // Error: cannot reassign a readonly property
todo4.completed = true // OK

// 实现
type TToReadonly<T> = { readonly [K in keyof T]: T[K] }
type MyReadonly4<T, U extends keyof T> = TToReadonly<Pick<T, U>> & Omit<T, U>
