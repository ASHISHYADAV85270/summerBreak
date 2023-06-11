/*make a progran such that they work in the given order only and there working estimated time is givven infront of each block 
REGISTER->3 sec
SEND WELCOME EMAIL->2 sec
LOGIN->5sec
GET USER DATA->2 sec
DISPLAY USER DATA->7sec 
*/

function register(callback) {
    setTimeout(() => {
        console.log("register");
        callback();
    }, 3000);

}
function welcom_email(callback) {

    setTimeout(() => {
        console.log("welcome email");
        callback();
    }, 8000);
}
function login(callback) {
    setTimeout(() => {
        console.log("LOGIN");
        callback();
    }, 5000);
}
function get_user_data(callback) {

    setTimeout(() => {
        console.log("GET DATA");
        callback();
    }, 2000);
}
function display_user_data() {
    setTimeout(() => { console.log("DISPLAY DATA"); }, 7000);
}


// callback hell
register(function () {
    welcom_email(function () {
        login(function () {
            get_user_data(function () {
                display_user_data();
            })
        })
    })
});


/* to overcome it we require to  use promises */

console.log("other application work");