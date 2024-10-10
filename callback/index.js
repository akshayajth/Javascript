//Callback
// setTimeout(function () {
//     console.log("Timer");
// }, 2000);

// function x(y){
// console.log("x");
// y();
// }
// x( function y() {
//     console.log("y");
// });


// event listener
let count = 0;
document.getElementById("clickMe").addEventListener("click", function xyz(){
    console.log("Button clicked", ++count);
});