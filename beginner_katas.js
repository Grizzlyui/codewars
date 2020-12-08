
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
  function getVillainName(birthday){
    const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
    const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
    const month = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
    let arr = birthday.split(' ');
    let first = m[month.indexOf(arr[0])];
    let last = d[parseInt(month.indexOf(arr[1]))];
    console.log(`Your villian name is: The ${first} ${last}.`)    
  }

  getVillainName('august 8')