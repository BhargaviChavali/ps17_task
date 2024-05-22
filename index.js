const prompt =require("prompt-sync")();
// 1 :  Find the total numbers of pairs, formed by the given space separated numbers.
// Enter numbers: 10 20 10 30 20 20 20
// output: 3 pairs
// Enter numbers: 10 20 30 50 50
// output: 1 pair

// Code :

let arr1 = prompt("Enter numbers : ").split(" ").map(Number);
let c = 0;
let p = 0;
let emp = {};

for (let i of arr1) {
    emp[i] = (emp[i] || 0) + 1;
}

for (let key in emp) {
    p += Math.floor(emp[key] / 2);
}

console.log(p, "pairs");

// 2 : Find the first  missing prime number amonge the given space separated numbers.
// Enter numbers: 20 5 2 7 12 14
// output: 3

// Code :
let arr = prompt("Enter numbers : ").split(" ").map(Number);
let temp = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[i]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

let k = 2;

while (true) {
    let present = false;
    if (isPrime(k)) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === k) {
                present = true;
                break;
            }
        }
    }
    if (!present && isPrime(k)) {
        console.log(k);
        break;
    }
    k++;
}




//  3 : Write a program to check the difference between maximum and minimum 
// numbers, if that is also a part of the array then print “True” otherwise print 
// “False”. 
// Test Case – 1:
// Input: [ 5, 6, 7, 5, 3 ]
// Output: True 
// Explanation: In the given array, max number is 7 and min number is 3. There 
// difference is 5 (7-3). As 5 is part of the array, output is True.
// Test Case – 2:
// Input: [ 100, 200 , 300, 600, 900 ] 
// Output: False

// Code :

let arr2=prompt("Enter numbers : ").split(" ").map(Number);
let max=0;
let min=arr2[0];
for(i of arr)
    {
        if(max<i)
            max=i;
        if(min>i)
            min=i;
    }
    // console.log(max);
    // console.log(min);
    let diff=max-min;
    if(arr2.includes(diff))
        console.log("true")
    else
        console.log("false");


// 4 :Write a program that takes space seperated numbers as input, Among the 
// numbers, add the first number with last number, second number with second 
// number from last and so on. Arrange their summation in ascending order. 
// Test Case – 1: 
// Input: 10 21 7 31 9
// Output: 7 19 52 
// Explanation : In the given array of numbers, first number 10 is added to last 
// number 9, their sum is 19, next second number 21 is added to 31, their sum is 52, 
// then after one number is left over i.e, 7. So the numbers formed are 19, 52, 7. 
// Ascending order of them is : 7, 19, 52.

// Code :

let arr3=prompt("Enter numbers : ").split(" ").map(Number);
let length=arr3.length;
let res=[];
let sum=0;
for(i=0;i<(length+1)/2;i++)
    {
        sum=arr3[i]+(i===length-1-i ? 0 : arr3[length-1-i]);
        res.push(sum);
    }
    for (i=0;i<res.length-1;i++) {
        for (j=0;j<res.length-1-i;j++) {
          if (res[j]>res[j+1])
         {
            let temp=res[j];
            res[j]=res[j+1];
            res[j+1]=temp;
          }
        }
      }
      let result=res.join(",");
      console.log(result);
    
     