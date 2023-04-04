"use strict";
const elForm = document.querySelector("#form");
const elFormMatrix = document.querySelector(".matrix-form");
const result = document.querySelector(".result-text");
const result2 = document.querySelector(".result-text2");

function twoDimensionArray(a, b) {
  let arr = [];

  // creating two dimensional array
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      arr[i] = [];
    }
  }
  return arr;
}

// matritsalarni ko'paytirish

function multiply(m1, m2, mat1, n1, n2, mat2) {
  let x, i, j;
  let res = new Array(m1);
  for (i = 0; i < m1; i++) res[i] = new Array(n2);

  for (i = 0; i < m1; i++) {
    for (j = 0; j < n2; j++) {
      res[i][j] = 0;
      for (x = 0; x < m2; x++) {
        res[i][j] += Math.round(mat1[i][x] * mat2[x][j]);
      }
    }
  }
  return res;
}

const codeObj = {
  " ": "0",
  "!": "1",
  "@": "2",
  "#": "3",
  "$": "4",
  "%": "5",
  "^": "6",
  "&": "7",
  "*": "8",
  "(": "9",
  ")": "10",
  "_": "11",
  "+": "12",
  ",": "13",
  ".": "14",
  "-": "15",
  "/": "16",
  0: "17",
  1: "18",
  2: "19",
  3: "20",
  4: "21",
  5: "22",
  6: "23",
  7: "24",
  8: "25",
  9: "26",
  ":": "27",
  ";": "28",
  "<": "29",
  "=": "30",
  ">": "31",
  "?": "32",
  '"': "33",
  "'": "34",
  A: "35",
  B: "36",
  C: "37",
  D: "38",
  E: "39",
  F: "40",
  G: "41",
  H: "42",
  I: "43",
  J: "44",
  K: "45",
  L: "46",
  M: "47",
  N: "48",
  O: "49",
  P: "50",
  Q: "51",
  R: "52",
  S: "53",
  T: "54",
  U: "55",
  V: "56",
  W: "57",
  X: "58",
  Y: "59",
  Z: "60",
  "[": "61",
  "\\": "62",
  "]": "63",
  "`": "64",
  "~": "65",
  "№": "66",
  a: "67",
  b: "68",
  c: "69",
  d: "70",
  e: "71",
  f: "72",
  g: "73",
  h: "74",
  i: "75",
  j: "76",
  k: "77",
  l: "78",
  m: "79",
  n: "80",
  o: "81",
  p: "82",
  q: "83",
  r: "84",
  s: "85",
  t: "86",
  u: "87",
  v: "88",
  w: "89",
  x: "90",
  y: "91",
  z: "92",
  "{": "93",
  "|": "94",
  "}": "95",
};

const textObj = {};
let values = Object.entries(codeObj);
values.forEach((item) => {
  textObj[item[1]] = item[0];
});

let a,b,c,d;

elFormMatrix.addEventListener("submit", (evt) => {
  evt.preventDefault();

  // --------- Text to code begin ----------------
  a = evt.target.matrix1.value;
  b = evt.target.matrix2.value;
  c = evt.target.matrix3.value;
  d = evt.target.matrix4.value;

  const matrixs = twoDimensionArray(2, 2);
  matrixs[0][0] = +a;
  matrixs[0][1] = +b;
  matrixs[1][0] = +c;
  matrixs[1][1] = +d;

  let value = evt.target.text.value;
  let resultArr = [];

  if (value.length % 2 != 0) {
    value = value + " ";
  }

  const textMatrix = twoDimensionArray(2, value.length / 2);

  let order = 0;
  for (let j = 0; j < value.length; j++) {
    if (order % 2 == 0) {
      textMatrix[0][j / 2] = +codeObj[`${value.at(order)}`];
      textMatrix[1][j / 2] = +codeObj[`${value.at(order + 1)}`];
    }
    order++;
  }

  let newArr = [...multiply(2, 2, matrixs, 2, value.length / 2, textMatrix)];

  for (let i = 0; i < value.length / 2; i++) {
    resultArr.push(newArr[0][i]);
    resultArr.push(newArr[1][i]);
  }

  result.textContent = resultArr.join(" ");

// ------------- Code to text begin ----------------------
  
    const arr = evt.target.code.value.split(" ");
    // console.log(arr);
    
  
    if(arr.length % 2 == 1) arr.push('0');
    const codeArr = twoDimensionArray(2, arr.length/2);
  
    
    let index = 0;
      for(let j=0; j<arr.length/2; j++ ){
        if(index % 2 == 0){
           codeArr[0][j] = +arr[index];
           codeArr[1][j] = +arr[index + 1];
          }
        index+=2;
      }
  
      const reverseKeyMatrix = twoDimensionArray(2,2);
      const _D = (a*d) - (b*c)
      reverseKeyMatrix[0][0] = +d/_D; 
      reverseKeyMatrix[0][1] = -b/_D; 
      reverseKeyMatrix[1][0] = -c/_D; 
      reverseKeyMatrix[1][1] = +a/_D; 

     const codeMultiplyArr = multiply(2,2,reverseKeyMatrix,2,codeArr[0].length,codeArr)

    const resultArr2 = [];

      for(let j=0; j<arr.length/2; j++){
          resultArr2.push(codeMultiplyArr[0][j])
          resultArr2.push(codeMultiplyArr[1][j]) 
      }

    const textArr = [];
    resultArr2.forEach((item)=>{
      textArr.push(textObj[`${item}`]);
    })


    result2.textContent = textArr.join("");
});



