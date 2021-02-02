declare enum CONSTANTS {
    ADD_TODO = "todo/add",
    DELETE_TODO = "todo/delete"
}
declare const addTodo: (name: string, activity: any) => {
    type: CONSTANTS;
    payload: {
        name: string;
        activity: any;
    };
};
declare const deleteTodo: (id: string) => {
    type: CONSTANTS;
    payload: {
        id: string;
    };
};
interface AddTodoAction {
    type: CONSTANTS.ADD_TODO;
    payload: {
        name: string;
        activity: {
            [key: string]: any;
        };
    };
}
interface DeleteTodoAction {
    type: CONSTANTS.DELETE_TODO;
    payload: {
        id: string;
    };
}
declare type Action = AddTodoAction | DeleteTodoAction;
interface State {
    todos: {
        name: string;
        id: string;
    }[];
}
declare const initState: () => State;
declare function reducer(state: State | undefined, action: Action): {
    name: string;
    activity: {
        [key: string]: any;
    };
    todos: {
        name: string;
        id: string;
    }[];
} | {
    todos: {
        name: string;
        id: string;
    }[];
};
