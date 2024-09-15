// 用例
type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
// 实现
type Includes<T extends any[], U> = U extends T[number] ? true : false
