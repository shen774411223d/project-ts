
const obj = {
  name: 'jack',
  sex: 'male',
  age: 18
}
function pick<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map(n => o[n])
}

pick(obj, ['name'])

const images = {
  src: 'https://www.google.com.hk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
  alt: '谷歌',
  width: 500
}

type P = keyof typeof images

type Type = typeof images[P]

interface User {
  username: string
  id: number
  token: string
  avatar: string
  role: string
  isChild: boolean
}
type partial<T> = {[K in keyof T]?: T[K]}
type NewUser = partial<User>

type Keys = 'option1' | 'option2';
type Flags = { [K in keyof User]: boolean };

type Proxy<T> = {
  get(): T;
  set(value: T): void;
}
type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>;
}

type NakedUsage<T> = T extends boolean ? "YES" : "NO"
type D = NakedUsage<number | boolean>
type WrappedUsage<T> = [T] extends [boolean] ? "YES" : "NO";
type W = WrappedUsage<[number]>

type Diff<T, U> = T extends U? never : T
type F = Diff<{b: 'c'}, {b: 'b', c: 'c'}>

interface Part {
  id: number;
  name: string;
  subparts: Part[];
  updatePart(newName: string): void;
}

type PrintFunctionType<T> = {[K in keyof T]: T[K] extends Function? K : never}[keyof T]

type R = PrintFunctionType<Part>

type Arr<W> = {[K in keyof W]: string}[keyof W]

type WW = Arr<User>
type BB = keyof User
type B = User[BB]
