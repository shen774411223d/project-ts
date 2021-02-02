declare const obj: {
    name: string;
    sex: string;
    age: number;
};
declare function pick<T, K extends keyof T>(o: T, names: K[]): T[K][];
declare const images: {
    src: string;
    alt: string;
    width: number;
};
declare type P = keyof typeof images;
declare type Type = typeof images[P];
interface User {
    username: string;
    id: number;
    token: string;
    avatar: string;
    role: string;
    isChild: boolean;
}
declare type partial<T> = {
    [K in keyof T]?: T[K];
};
declare type NewUser = partial<User>;
declare type Keys = 'option1' | 'option2';
declare type Flags = {
    [K in keyof User]: boolean;
};
declare type Proxy<T> = {
    get(): T;
    set(value: T): void;
};
declare type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
};
declare type NakedUsage<T> = T extends boolean ? "YES" : "NO";
declare type D = NakedUsage<number | boolean>;
declare type WrappedUsage<T> = [T] extends [boolean] ? "YES" : "NO";
declare type W = WrappedUsage<[number]>;
declare type Diff<T, U> = T extends U ? never : T;
declare type F = Diff<{
    a: 'a';
} | {
    b: 'b';
}, {
    a: 'a';
} | {
    b: 'b';
}>;
