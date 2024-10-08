// 用例
interface User {
    name: string
    age: number
    address: string
}

type UserPartialName = PartialByKeys<User, 'name'> // { name?:string; age:number; address:string }

// 实现
type PartialByKeys<T extends {}, U = keyof T> = Omit<
    Partial<Pick<T, U & keyof T>> & Omit<T, U & keyof T>,
    never
>
