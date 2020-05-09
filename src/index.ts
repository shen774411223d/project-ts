type UserAction = | {
  id: number
  action: 'delete'
  info: any
} | {
  action: 'create'
  info: any
}

function UserReducer(userAction: UserAction) {
  switch(userAction.action) {
    case 'delete':
      userAction.id
  }
}