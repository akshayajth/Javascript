function x(){

   for (let i =1; i <=5; i++) {

    setTimeout( function (){
        console.log(i);
    }, i * 2000);
   }
    console.log("Namaste javascript")

    //At first it log the namste javascript and then it print the value 1.
    //let is block scope 
    // var is not  ablock scope, so it wont copy values and create it
}
x();






// //
// function outer() {
//     let outerVariable = 'I am outside!';
  
//     function inner() {
//       console.log(outerVariable); // Inner function can access the outerVariable
//     }
  
//     inner();
//   }
  
//   outer(); // Output: I am outside!