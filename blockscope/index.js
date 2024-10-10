
//Block

// if(true){ 

//     //Compound Statement

//     var a = 10;
//     console.log(a);
// }

//Block-Scope

// {

//     var a = 10;
//     let b = 15;
//     const c = 20;
//     console.log(a);Global scope
//     console.log(b);
//     console.log(c);
// }

// console.log(a); //Block scope
// console.log(b);
// console.log(c);

// value will take only the globalscope not the blockscope 
// but it takes only the var a since it was a global scope 

//Shadowing

// var a = 100;
// {

//         var a = 10;
//          let b = 15;
//          const c = 20;
//         console.log(a);
//         console.log(b);
//          console.log(c);
// }

//Eg for shadowing


const c = 100;
function x() {
    const c = 30;
    console.log(c); // This will print 30
}
console.log(c); // This will print 100
x(); // Call the function to print 30

