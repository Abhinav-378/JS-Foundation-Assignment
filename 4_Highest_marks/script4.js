//array of marks of 5 students
let array=[45,23,99,89,77];

let max=array[0];
for(let i=0;i<5;i++){
    (array[i]>max)?(max=array[i]):max=max;
}
console.log(max);
