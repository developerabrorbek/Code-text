"use strict";

const elForm = document.querySelector("#form");
const elForm2 = document.querySelector("#form-second")
const result = document.querySelector(".result-text")


const codeObj = {
    " ": "00",
    "!": "01" ,
    "@": "02",
    "#": "03",
    "$": "04",
    "%": "05",
    "^": "06",
    "&": "07",
    "*": "08",
    "(": "09",
    ")": "10",
    "_": "11",
    "+": "12",
    ",": "13",
    ".": "14",
    "-": "15",
    "/": "16",
    "0": "17",
    "1": "18",
    "2": "19",
    "3": "20",
    "4": "21",
    "5": "22",
    "6": "23",
    "7": "24",
    "8": "25",
    "9": "26",
    ":": "27",
    ";": "28",
    "<": "29",
    "=": "30",
    ">": "31",
    "?": "32",
    '"': "33",
    "'": "34",
    "A": "35",
    "B": "36",
    "C": "37",
    "D": "38",
    "E": "39",
    "F": "40",
    "G": "41",
    "H": "42",
    "I": "43",
    "J": "44",
    "K": "45",
    "L": "46",
    "M": "47",
    "N": "48",
    "O": "49",
    "P": "50",
    "Q": "51",
    "R": "52",
    "S": "53",
    "T": "54",
    "U": "55",
    "V": "56",
    "W": "57",
    "X": "58",
    "Y": "59",
    "Z": "60",
    "[": "61",
    "\\":"62",
    "]": "63",
    "`": "64",
    "~": "65",
    "№": "66",
    "a": "67",
    "b": "68",
    "c": "69",
    "d": "70",
    "e": "71",
    "f": "72",
    "g": "73",
    "h": "74",
    "i": "75",
    "j": "76",
    "k": "77",
    "l": "78",
    "m": "79",
    "n": "80",
    "o": "81",
    "p": "82",
    "q": "83",
    "r": "84",
    "s": "85",
    "t": "86",
    "u": "87",
    "v": "88",
    "w": "89",
    "x": "90",
    "y": "91",
    "z": "92",
    "{": "93",
    "|": "94",
    "}": "95",
}


const textObj = {};
let values = Object.entries(codeObj);
values.forEach((item)=>{
   textObj[item[1]] = item[0]
})

elForm.addEventListener("submit", (evt)=>{
    evt.preventDefault();
    let value = evt.target[0].value
    let resultArr= [];
    for(let char of value){
        resultArr.push(codeObj[char]);
    }

    result.textContent = resultArr.join("");
    resultArr = [];
})

elForm2.addEventListener("submit", (evt)=>{
    evt.preventDefault();
    let value = evt.target[0].value
    let resultArr= [];

    if(value.length % 2 != 0){
        value = value + "0";
    }

    for(let i=0; i<value.length; i+=2){
        let index = i;
        let pairs = value.at(index) + value.at(++index);
        resultArr.push(textObj[pairs])
    }

    result.textContent = resultArr.join("");
    resultArr = [];
})