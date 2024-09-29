/*
 * @Description:
 * @Author: wangfengxiang
 * @Date: 2024-09-28 22:11:16
 * @LastEditTime: 2024-09-28 22:17:01
 * @LastEditors: wangfengxiang
 */
type case1 = IsUnion<string> // false
type case2 = IsUnion<string | number> // true
type case3 = IsUnion<[string | number]> // false

type IsUnion<T, B = T> = T extends B ? ([B] extends [T] ? false : true) : never
