function rotLeft(a, d){
    while(d !== 0){
        a.push(a[0]);
        a.shift()
        d-- 
    }
    return a
}
