const accountId = 1234224
let accountEmail = "aditya@gmail.com"
var accountPassword = "4564"
accountCity = "surat"
let accountState;
// accountId = 2 // not allowed we can't change value of constant

accountEmail =" adi@.sx"
accountPassword = "aschbk"
accountCity = "ahmedabad" 
console.table([accountEmail,accountPassword,accountCity,accountState]);


/* Lecture  # 1:
Variables and Data Types
const = can't be re-assigned a value and can't be declared again  (block scope)
let = can be re-assigned a value but can't be declared again (block scope)
var = it can be re-assigned a value and it can also be declared again  (Global scope)

=> Never use var in your code instead of let because of block and functional scope issues.
# console.table([group of variables you want to show in tabular form])
*/