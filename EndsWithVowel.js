"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString.trim().split("\n").map((str) => str.trim());
  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Please do not modify anything above this line */

function main() {
  const inputString = readLine();
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  let j=0;
  /* Write your code here */
  let upperString=inputString.toUpperCase();
  for(let i of vowels ){
      if(upperString.endsWith(i)){
          console.log(true);
          j+=1
      }
  }
  if(j===0){
     console.log("false") 
  }
}