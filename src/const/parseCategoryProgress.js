export const parseCategory = (int) => {
    if(typeof(int) == 'number'){
        if(int === 0){
            return "Musikk"
        } else if(int === 1){
            return "Film"
        }else if(int === 2){
            return "SpillUtvikling"
        }else if(int === 3){
            return "NettUvikling"
        }
    }else {
        return int
    }
}
export const parseProgress = (int) => {
    if(typeof(int) == 'number')
    {
        if(int === 0 ){
            return "Oppstart"
        } else if(int === 1){
            return "Under Utvikling"
        }else if(int === 2){
            return "Utsatt"
        }else if(int === 3){
            return "Ferdig"
        }
    } else {
        return int
    }
    
}