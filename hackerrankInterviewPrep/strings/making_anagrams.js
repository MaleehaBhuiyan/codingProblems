function makeAnagram(a, b) {
    let deletedChar = 0,
        frequencyCounter1 = {},
        frequencyCounter2 = {};
    
    for(let val of a){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    
    for(let val of b){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    
    for(let key in frequencyCounter1){
        if(!(key in frequencyCounter2)){
            deletedChar+=frequencyCounter1[key]
        } else if(frequencyCounter1[key] !== frequencyCounter2[key]){
            deletedChar += Math.abs(frequencyCounter1[key] - frequencyCounter2[key])
        }
    }
    for(let key in frequencyCounter2){
        if(!(key in frequencyCounter1)){
            deletedChar+=frequencyCounter2[key]
        }
    }
    
    return deletedChar

}