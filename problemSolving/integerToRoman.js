var intToRoman = function(num) {
    let symbols = {
        1:    'I',
        5:    'V',
        10:   'X',
        50:   'L',
        100:  'C',
        500:  'D',
        1000: 'M'
    }, numArr = [], romanNumeral = "";
    
    
    function addZeros(num){
        num = num.toString()
        num = num.split("").reverse().join("")
        for(let i = 0; i < num.length; i++){
            numArr.push(num[i] + '0'.repeat(i))
        }
    }
    
    function toRoman(numArr){
        numArr = numArr.reverse()
        for(let val of numArr){
            val = parseInt(val, 10)
            if(val in symbols){
                romanNumeral += symbols[val]
            } else if(val === 4){
                romanNumeral += 'IV'
            } else if(val === 9){
                romanNumeral += 'IX'
            } else if(val === 40){
                romanNumeral += 'XL'
            } else if(val === 90){
                romanNumeral += 'XC'
            } else if(val === 400){
                romanNumeral += 'CD'
            } else if(val === 900){
                romanNumeral += 'CM'
            } else if(val < 4 && val > 1){
                romanNumeral += 'I'.repeat(val)
            } else if(val < 40 && val > 10){
                val = val/10
                romanNumeral += 'X'.repeat(val)
            } else if(val < 400 && val > 100){
                val = val/100
                romanNumeral += 'C'.repeat(val)
            } else if(val < 4000 && val > 1000){
                val = val/1000
                romanNumeral += 'M'.repeat(val)
            } else if(val < 9 && val > 5){
                val = val - 5 
                romanNumeral += 'V';
                romanNumeral += 'I'.repeat(val)
            } else if(val < 90 && val > 50){
                val = (val/10) - 5 
                romanNumeral += 'L';
                romanNumeral += 'X'.repeat(val)
            } else if(val < 900 && val > 500){
                val = (val/100) - 5 
                romanNumeral += 'D';
                romanNumeral += 'C'.repeat(val)
            }
        }
    }
    
    
    
    addZeros(num)
    toRoman(numArr)
   
    return romanNumeral; 
};