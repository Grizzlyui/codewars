
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
function order(words){
    let checked_num = 0;
    let strArr = words.split(' ');
    console.log(strArr)
    let temp = '';
    for (let i = 0; i < strArr.length +1; i++) {
        if( strArr.indexOf(String(checked_num)) >= 0) {
            temp = temp + strArr[i] + ' ';
        } else {
            console.log('what')
        }
        checked_num += 1;
    }
    return temp
}



let reverse = reverseString('Hello world');
let reverse2 = reverseAgain('Did it again');
let camelCase = toCamelCase('this is camel');

console.log(order("is2 Thi1s T4est 3a"))