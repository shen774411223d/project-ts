declare const config: {
    dev: {};
    prod: {};
    stage: {};
};
declare type Props = keyof typeof config;
declare const val: Props;
interface FirstInterface {
    doSomething(): number;
}
interface SecondInterface {
    doSomethingElse(): string;
}
interface ChildInterface extends FirstInterface, SecondInterface {
    doSomethingThree(): boolean;
}
declare class Demo<T extends ChildInterface> {
    private Fun;
    use(): void;
}
