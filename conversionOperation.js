let score = "33"
console.log(typeof(score))  // its always preferred to check the type as when any number is passed from frontend to backend, we don't know its type

let valueStr = Number(score) // as score is string , it will be converted into number and output would be number = 33 
console.log(valueStr);

let s = "33abc"
let valueS = Number(s) // will not throw any error -- it also contain string that cann't be converted into number
console.log(typeof(valueS)) // number
console.log(valueS)  // NaN
// this is error in js, that it will display that it is converted by actually there is an NaN 

let n = null 
let valueN = Number(n)
console.log(typeof(valueN)); // number
console.log(valueN) // 0

let ud = undefined
let valueUd = Number(ud)
console.log(typeof(valueUd)); //Number
console.log(valueUd) // NaN

/*
"33" -- 33
"33abc",undefined -- NaN
true -- 1, false -- 0
null -- 0

number to boolean
1 -- true, 0 -- false
"" -- false
"twinkle" -- true

number to string
33 -- "33"
*/

/* 
Boolean, String, Number -- all conversion methods
*/