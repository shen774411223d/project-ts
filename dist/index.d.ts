declare const config: {
    dev: {};
    prod: {};
    stage: {};
};
declare type Props = keyof typeof config;
