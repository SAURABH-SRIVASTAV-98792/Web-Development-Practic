let n = prompt("Enter a number");
let arr = [];
for(let i=1; i<=n; i++){
    arr[i-1] = i;
}
//console.log(arr);
//const initialValue = 0;
//const sumValue = arr.reduce(
  //  (accumulator,currentvalue) => accumulator + currentvalue);
//console.log(sumValue);
console.log(arr);
const initialValue = 1;
const productValue = arr.reduce(
    (accumulator,currentvalue) => accumulator * currentvalue);
console.log(productValue);

