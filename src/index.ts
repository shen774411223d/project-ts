
enum CONSTANTS {
  ADD_TODO = 'todo/add',
  DELETE_TODO = 'todo/delete'
}

const addTodo = (name: string, activity: any) => {
  return {
    type: CONSTANTS.ADD_TODO,
    payload: {
      name,
      activity
    }
  }
}

const deleteTodo = (id: string) => {
  return {
    type: CONSTANTS.DELETE_TODO,
    payload: {
      id
    }
  }
}

interface AddTodoAction {
  type: CONSTANTS.ADD_TODO,
  payload: {
    name: string,
    activity: {[key: string]: any}
  }
}

interface DeleteTodoAction {
  type: CONSTANTS.DELETE_TODO,
  payload: {
    id: string
  }
}

type Action = AddTodoAction | DeleteTodoAction

interface State {
  todos: {
    name: string
    id: string
  }[]
}

const initState = (): State => ({
  todos: []
})

function reducer(state: State = initState(), action: Action) {
  switch(action.type) {
    case CONSTANTS.ADD_TODO:
      return {...state, ...action.payload}
    case CONSTANTS.DELETE_TODO:
      const {id} = action.payload
      return {...state, todos: state.todos.filter(item => item.id !== id)}
  }
}