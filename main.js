// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 
 

// Write a JavaScript program to convert a number to a string.
const numToString = () => {
  let num = document.getElementById('numToString').value
  let numString = num.toString()
  let stringResult = document.getElementById("stringResult")

  if (num.length == 0) {
    console.log("Pretty sure you know that's not a number.")
    stringResult.innerHTML = "Pretty sure you know that's not a number."
  }
  else {
    console.log(("input (" + num + ") type is: " + typeof (numString)))
    stringResult.innerHTML = 'The number you entered: ' + num + ', is now a string: "' + numString + '"'
  }
}

// }

// Write a JavaScript program to convert a string to the number.
const convertToNum = () =>{
  let str = document.getElementById('stringToNum').value
  let numResult = document.getElementById('numResult')
  let regex = /[+-]?\d+(?:\.\d+)?/g
  let numArray = []

  if (str.length === 0) {
    console.log('Um, That is not a string.')
    numResult.innerHTML = 'Um, that is not a string.'
  }
  else {
    while (match = regex.exec(str)) {
      console.log(match[0]);
      let stringNum = parseInt(match)
      numArray.push(' ' + match[0] + ' (type: ' + typeof (stringNum) + ')')
      numResult.innerHTML = "I've pulled and converted the following numbers from your string: " + numArray
      console.log(typeof (stringNum));
    }
  }
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  const displayType = () => {
    let value = document.getElementById("checkType").value
    let typeResult = document.getElementById('inputResult')

    if (value === ""){
      typeResult.innerHTML = 'What you entered is "Undefined".'
    }
    else if (value === "true" || value === "false" || value === "True" || value === "False"){
      typeResult.innerHTML = 'What you entered is a "Boolean".'
    }
    else if (!Number.isNaN(Number(value))){
      typeResult.innerHTML = 'What you entered is a "Number".'
    }
    else{
      typeResult.innerHTML = 'What you entered is a "String"'
    }
  }

  
// Write a JavaScript program that adds 2 numbers together.
 const displaySum = () => {
  let a = document.getElementById("num1").value
  let b = document.getElementById("num2").value
  let sum = Number(a) + Number(b)
  let sumResult = document.getElementById("sumResult")
  sumResult.innerHTML = sum
 }


// Write a JavaScript program that runs only when 2 things are true.
const displayScore = () => {
  let answerOne = document.getElementById("problem-one").value;
  let answerTwo = document.getElementById("problem-two").value;
  let testResult = document.getElementById("test-result");
  let rightAnswer = document.getElementById("correct").value;

  if (answerOne === rightAnswer && answerTwo === rightAnswer) {
    console.log("Both are true");
    testResult.innerHTML = "Both are correct!";
  }
  // Write a JavaScript program that runs when 1 of 2 things are true.
  else if (answerOne !== answerTwo){
    console.log("One is true");
    testResult.innerHTML = "Only one is correct.";
  }
  // Write a JavaScript program that runs when both things are not true.  
  else{
    console.log('neither is true')
    testResult.innerHTML = "Neither are correct."
  }
}

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
