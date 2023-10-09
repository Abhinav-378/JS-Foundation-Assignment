let arr=[1,2,4,3,6,15,7,6,8,9,4];

let len=(arr.length)

for(let i=0;i<len;i++){
    if(arr[i]%3==0 && arr[i]%2!=0){
        console.log(arr[i]);
    }
    else{
        continue;
    }
}