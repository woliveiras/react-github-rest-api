export default function userDataReducer (state, action) {
  switch (action.type) {
    case 'SET_USER_DATA': {
      return {
        ...state,
        error: '',
        user: action.user
      }
    }
    case 'SET_REPOSITORIES_DATA': {
      return {
        ...state,
        error: '',
        repositories: action.repositories
      }
    }
    case 'SET_FETCH_ERROR': {
      return {
        error: action.error
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
