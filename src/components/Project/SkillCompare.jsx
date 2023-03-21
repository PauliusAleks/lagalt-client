function SkillCompare(arr, arr2){
    if(arr.every(i => arr2.includes(i))) {
        return true
    }
    else {
        return false;
    }
  }
export default SkillCompare