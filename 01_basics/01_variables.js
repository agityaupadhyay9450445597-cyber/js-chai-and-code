const accountId = 144553
let accountEmail ="aditya9450@gmail.com"
var accountPassword = "9450"
accountCity = "jaipur"
let accountState ;
// omly variable declared and not assign value then it take as undefined
// accountId = 2 // const cannot changed

accountPassword = "1234" // let and var can be changed
accountEmail ="gaurav9450@gmail.com"
accountCity ="PRAYAGRAJ"
console.log(accountId);
// prefer not to use var because of issue in block scope and functional scope

console.log([accountEmail, accountId, accountPassword, accountCity]);
console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);

