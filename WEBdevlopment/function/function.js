
/* call back function ->A callback is a function passed as an argument to another function
This technique allows a function to call another function
A callback function can run after another function has finished */


/*
const formattext = function (text, func1) {
    return typeof func1 === "function" ? func1(text) : `formattext is runned and your value is ${text}`;
}
const ans = formattext("helpme", function (text) {
    return `i am func1 called  as call back function`;
})
console.log(ans);
*/


//IIFE(Immediately invoked function expression)--> (function)();
(function setup() {
    console.log("setup done");
})();
