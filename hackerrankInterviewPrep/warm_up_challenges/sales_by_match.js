function sockMerchant(n, ar) {
    let pairs = 0,
    freqCounter = {};
    
    for(let val of ar){
        freqCounter[val] = (freqCounter[val] || 0) + 1 
    }
    
    for(let key in freqCounter){
        pairs += Math.floor(freqCounter[key] / 2) 
    }
    
    return pairs

}