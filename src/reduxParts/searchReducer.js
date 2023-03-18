export const search = (text) => {
    return {
      type: "SEARCH",
      text
    };
  };

export const reset = () => {
    return {
      type: "RESET",
    };
  };

  const searchReducer = (state = "", action) => {
    switch (action.type) {
      case "SEARCH":
        return state = action.text
      case "RESET":
        return (state = "all");
      default:
        return state;
    }
  };
  export default searchReducer;