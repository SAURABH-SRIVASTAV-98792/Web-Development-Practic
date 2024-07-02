let marks = [50,45,60,78,85];
console.log(marks);
let sum =0;
for(let val of marks){
    sum += val;
}
let avgMarks = sum/marks.length;
console.log(`avg marks of the class = ${avgMarks}`);