const initialState = {
    selectedTerminal: ''
  };
  
  const commonReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD':
        return {
          ...state,
          selectedTerminal: action.payload
        };
      default:
        return state;
    }
  };
  
  export default commonReducer;