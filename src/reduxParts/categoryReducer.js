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

  export const resetCategory = () => {
    return {
      type: "RESET",
    };
  };


const categoryReducer = (state = "Velg kategori", action) => {
    switch (action.type) {
      case "MUSIC":
        return (state = "Musikk");
      case "FILM":
        return (state = "Film");
      case "GAMEDEV":
        return (state = "SpillUtvikling");
      case "WEBDEV":
        return (state = "NettUtvikling");
      case "ALL":
        return (state = "Alle");
      case "RESET":
        return (state = "Velg kategori");
      default:
        return state;
    }
  };
  export default categoryReducer;
