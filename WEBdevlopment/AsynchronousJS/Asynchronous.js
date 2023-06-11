// Asynchronous mtlb boo kisi fuction ko hold pai nhi dalega ...bo khud bg mai hoga rhega



/* sync code mtlb joo order mai hi run hoga 
console.log("Hello");
console.log("I AM ASHISH"); */



// settimeout is also a async functioh
console.log("Heloo");
// setTimeout(joo kaam krna hai, kitni der baad krna hai); 
setTimeout(function () { console.log("ok buddy") }, 3000);
console.log("kese ho aap");
/*************eventn listner is also a async function***/
// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgICAgICBjb25zb2xlLmxvZygnWW91IGNsaWNrZWQgdGhlIGJ1dHRvbiEnKTsgICAgCn0pOwo%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

/***agr hmm normal buttob lengai aur uspai EVENTLISTENER LGAA DENGAI ONCLICK bala...too bo starting mai hi web api pai chla jaiga ...aur jese hii click hoga boo call back queue mai aa jaiga fir call stack kai through output dedga   */

/**note */
// saare kai saare settimeout ek sath web api mai chlai jaatai hai fir jiska time khtm hota rhta hai booo call backqueue mai chla jata hai aur fir stack empty honai kaa wait krta hai ek ek krke