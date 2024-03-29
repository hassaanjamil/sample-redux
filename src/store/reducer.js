const initialState = {

}

const counterReducer = (state = { value: 0 }, action) => {
    switch (action.type) {
      case 'counter/incremented':
        return { value: state.value + 1 }
      case 'counter/decremented':
        return { value: state.value - 1 }
      case 'counter/reset':
        return { value: 0 }
      default:
        return state
    }
  }

export { counterReducer };