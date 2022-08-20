const express = require("express");

const hours = {
    "00": "twelve",
    "01": "one",
    "02": "two",
    "03": "three",
    "04": "four",
    "05": "five",
    "06": "six",
    "07": "seven",
    "08": "eight",
    "09": "nine",
    "10": "ten",
    "11": "eleven",
    "12": "twelve",
    "13": "one",
    "14": "two",
    "15": "three",
    "16": "four",
    "17": "five",
    "18": "six",
    "19": "seven",
    "20": "eight",
    "21": "nine",
    "22": "ten",
    "23": "eleven"
};

const minutes1 = {
    "0": "oh",
    "2": "twenty",
    "3": "thirty",
    "4": "fourty",
    "5": "fifty"
};

const minutes2 = {
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine"
};

const teens = {
    "1": "eleven",
    "2": "twelve",
    "3": "thirteen",
    "4": "fourteen",
    "5": "fifteen",
    "6": "sixteen",
    "7": "seventeen",
    "8": "eighteen",
    "9": "ninteen"
}

function timeWord(string) {
    let time = string.split(':');
    let minutes = time[1].split("");
    console.log(minutes)
    let str;
    str = hours[time[0]]
    if(Number(minutes[0]) === 1) {
        str = `${str} ${teens[minutes[1]]}`
    } else if (Number(time[1]) === 0) {
        str = str + " o'clock"
    } else {
        str = `${str} ${minutes1[minutes[0]]} ${minutes2[minutes[1]]}`
    }
    if (string == "00:00"){
        return "midnight";
    } else if (string === "12:00"){
        return "noon";
    } else if (Number(time[0]) > 11) {
        return `${str} pm`
    } else {
        return `${str} am`
    }
}

module.exports = timeWord;