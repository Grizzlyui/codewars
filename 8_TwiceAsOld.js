function twiceAsOld(dadYearsOld, sonYearsOld) { 
    if(sonYearsOld === 0) return dadYearsOld;   
    let age = 0;
    let result = 0;
    for ( let i = dadYearsOld; i > 0 ; i--) {
        for( let j = sonYearsOld; j > 0; j--) {
            age++;
            console.log(age);            
            console.log(i);            
            console.log(j);            
            if(i / j === 2) {
                result = age;
            } else if (j === 0) {
                result = dadYearsOld - (sonYearsOld * 2);                
            }
        }        
    }
    return result;
}



console.log(twiceAsOld(36,7))