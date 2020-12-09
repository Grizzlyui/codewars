
// Function that reverses a string eg. "Hello world" => "dlrow olleH"
// What I learned:
// How to iterrate through characters in a string
// in revers and appending to a new variable.
function reverseString(string) {                            
    let temp = '';                                     
    for (let i= string.length -1; i >= 0 ; i--) {  
        temp += string[i];
    }
    return temp;
}

function reverseAgain(string) {
    return string.split('').reverse().join('');
}


// function to turn any string to Camel case
//What I leared:
// How to replace special characters from a string with a space
// a nad split the string according to each space
// iterate through the array and change the first character of each world to uppercase
function toCamelCase(str){
    let string = str.replace(/[^a-zA-Z ]/g, ' ')
    let splitstr = string.split(' ');
      for (let i = 1; i < splitstr.length; i++ )
          splitstr[i] = splitstr[i].charAt(0).toUpperCase() + splitstr[i].substring(1);    
      return splitstr.join('').trim()
  }


// orders words in a string according to the number found in each word
//"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
//in progress
function order2(words){    
    let strArr = words.split(' ');
    console.log(strArr);
    let temp = [];
    strArr.forEach(element => {
        // console.log('check1');
        let found = false;
        let checked_num = 0;
        for (let j = 0; j < element.length +1; j++) {
        //   console.log('check2');
          if( element.indexOf(String(checked_num)) >= 0) found = true;
            checked_num += 1;
        }
        if (found) {
            temp.push(strArr[element]);  
            console.log(element)          
        } else {
            console.log('what');
        }            
    });  
    return temp.join('');
}

function order(words) {
    let strArr = words.split(' '); // ['is2', 'Thi1s', 'T4est', '3a']
    let allFound = false;
    let checked_num = 0;
    let temp = [];
    while (allFound === false) {
        let amountFound = 0;
        let found = false;
        strArr.forEach(element =>{
            if( element.indexOf(checked_num) >= 0) found = true;                        
            if (found) {
                console.log(checked_num.typeOf);
                console.log('found');
                temp.push(element);
                amountFound++;
            } else {
                console.log('nope');
            }
        });        
        if (amountFound === strArr.length) {
            allFound = true;
        } else {
            console.log('still going');
        }
        checked_num += 1;
    }
    console.log('done');
    console.log(temp.join(' '));
}


// Function that checks whether Bob the bus driver has enough space on his bus for waiting passengers
//Learned MAth.abs
//Learned `` strings
function enough(cap, on, wait) {
    let space = cap - on;
    if (wait > space) {
        console.log(`${Math.abs(wait-cap)}, He can't fit ${Math.abs(space-wait)} out of ${wait} waiting.`);
    } else if (wait === space){
        console.log(`0, He can fit all ${wait} passengers`);
    } else {
        console.log(`He can fit all ${wait} waiting passengers with ${space-wait} space left`);
    }
}
// codewars solution
function enough(cap, on, wait) {
    let space = cap - on;
    if (wait > space) {
        return Math.abs(space-wait);
    } else {
        return 0;
    }
}


//Quarter of the year
// Function that gives quarter of year month is in
const quarterOf = (month) => {
    if (month <= 3) {
        return 1;
    } else if (month <= 6) {
        return 2;
    } else if (month <= 9) {
        return 3;
    } else {
        return 4;
    }       
}
//best practise
const quarterOf2 = (month) => {    
    return Math.ceil(month / 3);
  }


//function that generates a villian name depending on your birthday
//given may 3
// doeant work on codewars
  function getVillainName(birthday){
    const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
    const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
    const month = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
    let arr = birthday.split(' ');
    let first = m[month.indexOf(arr[0])];
    let digit = arr[1];
    if (digit > 9) {
        digit = arr[1][1];
    }
    let last = d[parseInt(digit)];
    // console.log(`Your villian name is: The ${first} ${last}.`)    
  }

  
 // "The quick brown fox jumps over the lazy dog." --> true
 // "This is not a pangram." --> false
function isPangram(string){
    let newString = string.replace(/\s+/g,'').toLowerCase()
    const regex = /[a-z]/g;                // <-- declares alphabet
    let found = newString.match(regex);    // <-- matches array with alphabet 
    let uniq = [...new Set(found)];        // <-- removes duplicates 
    let foundNum = 0;
    uniq.forEach(element => foundNum++);   // <-- counts unique letters
    return (foundNum === 26 ? true : false);
}
//console.log(isPangram("The quick brown fox jumps over the lazy dog"));

// codewars solution
function isPangram1(string){
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
  }



// compare 2 strings and return matches
function commonGround2(s1, s2) {
    let arr1 = s1.split(' ');
    let arr2 = s2.split(' ');
    let found = [];
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j< arr1.length; j++) {    
            if (arr2.indexOf(arr1[i]) > -1) {
                found.push(arr2[i]);
            } else {
                return 'death';
            }
        }
    }
    return found.join(' ');
    // return (s1.match(s2) ? true : 'death');
}

function commonGround1(s1, s2){       
    let arr1 = s1.split(' ');
    let arr2 = s2.split(' ');
    let found = s2.match(arr1);    // <-- matches array with alphabet 
    let result = [...new Set(found)]; 
    return result;
}

function commonGround(s1, s2){  /// almost there
    let arr1 = s1.split(' ');
    let arr2 = s2.split(' ');
    let result = [];
    for (let i of arr1) {
        if (i.indexOf(arr2[i])) {
            result = result.concat(i);            
        }
    }
    console.log(result)
    return result.join(' ');
}


function commonGround3(s1, s2){
    let arr1 = s1.split(' ');
    let arr2 = s2.split(' ');
    let temp = [];     
    for(let i = 0; i < arr1.length; i++){
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                temp.push(arr1[i]);
            }
        }
    }
    let result = [...new Set(temp)];        // removes the wrong 'a'
    if (result.length === 0) {
        return 'death' 
    } else {
        return result.join(' ');
    }    
}


//final iteration
// How to compare 2 strings in 2 different ways
// chopping string into array and looping through 2 arrays simultaiously

function commonGround(s1, s2) {
    let arr1 = s1.split(' ');
    let arr2 = s2.split(' ');
    if (arr1.length < arr2.length) {
        return (s2.indexOf(s1) >= 0 ? s1 : 'death')
    } else if (arr1.length > arr2.length){
        return (s1.indexOf(s2) >= 0 ? s2 : 'death')
    } else if (arr1.length == arr2.length) {        
        let temp = [];  
        for(let i = 0; i < arr1.length; i++){
            for (let j = 0; j < arr2.length; j++) {
                if (arr1[i] == arr2[j]) {
                    temp.push(arr1[i]);
                }
            }
        }
        console.log(temp)
        if (temp.length === 0) {
            return 'death' 
        } else {
            return temp.join(' ');
        }    
    } 
}


// reverses each word in string that has 5 characters or more
function spinWords(string) {
    let arr1 = string.split(' ');
    let result = [];
    arr1.forEach(i => {
        if (i.length < 5) {
            result.push(i);
        } else {
            let reverse = '';
            for (let j = i.length - 1; j >= 0; j--) {
                reverse = reverse + i[j];
            }
            result.push(reverse);
        }
    });
    return result.join(' ')
}

//console.log(spinWords("Hey fellow warriors"))

function checkDigit(number, index1, index2, digit) {
    let tempNum = String(number) + String(number); 
    console.log(tempNum)
    let sliced = String(tempNum).slice(index1, index2);
    console.log(sliced)
    return (String(digit).indexOf(sliced) >= 0 ? true : false);
};

//console.log(checkDigit(1234567, 1, 0, 1))
//console.log(checkDigit(1234567, 0, 1, 2))
//console.log(checkDigit(6668844536485, 0, 0, 6))
console.log(checkDigit(40160170475193, 13, 7, 8))