export const setTrue = () => {
    return {
      type: "TRUE",
    };
  };
  
  export const setFalse = () => {
    return {
      type: "FALSE",
    };
  };

  const loggedInReducer = (state = false, action) => {
    switch (action.type) {
      case "TRUE":
        return (state = true);
      case "FALSE":
        return (state = false);
      default:
        return state;
    }
  };
  export default loggedInReducer;