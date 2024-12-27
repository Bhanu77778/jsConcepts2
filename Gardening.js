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
  const isGrassTrimmerFound = JSON.parse(readLine());
  const isWaterHosePipeFound = JSON.parse(readLine());

  let promise1=()=>{
      return new Promise((resolve,reject)=>{
          isGrassTrimmerFound?resolve("Grass Trimmed"):reject("Grass Trimmer Not Found");
      });
  };
  let promise2=()=>{
      return new Promise((resolve,reject)=>{
          resolve("Garden Cleaned");
      });
  };
  let promise3=()=>{
      return new Promise((resolve,reject)=>{
          isWaterHosePipeFound?resolve("Watered Plants"):reject("Water Hose Pipe Not Found");
      });
  };

  const myPromise = async () => {
    try {
     
      let p1=await promise1();
      console.log(p1);
      let p2=await promise2();
      console.log(p2);
      let p3=await promise3();
      console.log(p3);
      
    } catch(error) {
        console.log(error)
    }
  };
  
  myPromise();
}
