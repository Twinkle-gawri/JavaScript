const accountId = 144553  // to declare constant variable -- value doesnt cahange
let accountEmail = "twinkle@google.com"
var accountPassword = "12345"
accountCity = "Hisar"  // this way is not preferred 
let accountState;  // value would be undefined for this

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) 
// to display the variables at one time only