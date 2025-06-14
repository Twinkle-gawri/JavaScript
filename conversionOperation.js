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



//--------------------OPERATIONS----------------------

// Basic operation = +,-,*,**,/,%

let str1 = "twinkle"
let str2 = " gawri"
console.log(str1+str2)

console.log("1" + 2)  // output = 12
console.log(1 + "2")  // output = 12
console.log("1" + 2 + 2)  // output = 122
console.log(1 + 2 + "3")   // output = 33

console.log(null > 0)  // output = false
console.log(null == 0)  // output = false
console.log(null >= 0)   // output = true
// they worked differently because convertions null to number i.e 0 whereas equatity don't so >= true and > false

// undefined me false aata h

console.log("2" === 2) // false because === checks the same datatype also