export const search = (text) => {
    return {
      type: "SEARCH",
      show: true,
      text
    };
  };

export const setSearchShowTrue = () => {
    return {
      type: "SHOW_TRUE",
      show: true,
      text: ""
    };
  };
  export const setSearchShowFalse = () => {
    return {
      type: "SHOW_FALSE",
      show: false,
      text: ""
    };
  };

const INITIAL_STATE = {
    show: true,
    text: ""
  };

  const searchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "SEARCH":
        return state = action
      case "SHOW_TRUE":
        return state = action
      case "SHOW_FALSE":
        return state = action
      default:
        return state;
    }
  };
  export default searchReducer;