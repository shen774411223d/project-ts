"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var CONSTANTS;
(function (CONSTANTS) {
    CONSTANTS["ADD_TODO"] = "todo/add";
    CONSTANTS["DELETE_TODO"] = "todo/delete";
})(CONSTANTS || (CONSTANTS = {}));
var addTodo = function (name, activity) {
    return {
        type: CONSTANTS.ADD_TODO,
        payload: {
            name: name,
            activity: activity
        }
    };
};
var deleteTodo = function (id) {
    return {
        type: CONSTANTS.DELETE_TODO,
        payload: {
            id: id
        }
    };
};
var initState = function () { return ({
    todos: []
}); };
function reducer(state, action) {
    if (state === void 0) { state = initState(); }
    switch (action.type) {
        case CONSTANTS.ADD_TODO:
            return __assign(__assign({}, state), action.payload);
        case CONSTANTS.DELETE_TODO:
            var id_1 = action.payload.id;
            return __assign(__assign({}, state), { todos: state.todos.filter(function (item) { return item.id !== id_1; }) });
    }
}
//# sourceMappingURL=index.js.map