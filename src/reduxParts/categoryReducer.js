export const setMusic = () => {
    return {
      type: "MUSIC",
    };
  };
  
  export const setFilm = () => {
    return {
      type: "FILM",
    };
  };
  export const setGamedev = () => {
    return {
      type: "GAMEDEV",
    };
  };
  
 export const setWebdev = () => {
    return {
      type: "WEBDEV",
    };
  };
  export const setAll = () => {
    return {
      type: "ALL",
    };
  };


const categoryReducer = (state = "Choose category", action) => {
    switch (action.type) {
      case "MUSIC":
        return (state = "Music");
      case "FILM":
        return (state = "Film");
      case "GAMEDEV":
        return (state = "GameDevelopment");
      case "WEBDEV":
        return (state = "WebDevelopment");
      case "ALL":
        return (state = "All");
      default:
        return state;
    }
  };
  export default categoryReducer;
