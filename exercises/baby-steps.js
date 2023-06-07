/* console.log(process.argv); 
console.log(process.argv[process.argv.length - 1]); */
//this is an array containing 1. node directory, 2. directory of file 
//accepts command line arguments that will be included in process.argv
//elements of array are STRINGS

let sum = 0;
for (let i = 2; i < process.argv.length; i++){
    sum = sum + Number(process.argv[i]);
}
console.log(sum);