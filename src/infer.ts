
type PT<I> = I extends (param: infer PPP) => any? PPP : I

type C = PT<(param: boolean) => number>

type ReturnT<R> = R extends (...args: any[]) => infer PA ? PA : never

type Result = ReturnT<(name: string) => any>

class TestClass {
  constructor(public name: string, public age: number) {}
}

type Con<T extends new (...args: any[]) => any> = T extends new (...args: infer P) => any?
  P : never

type ConstructorType = Con<typeof TestClass>

type O = Omit<{name: 'jack', sex: 'male'}, 'name'>

interface User {
  name: string
  sex: string
}
function add(a: number, b: number) {
  return a + b
}
type returnType = typeof add
const f: returnType = (a, b) => a + b