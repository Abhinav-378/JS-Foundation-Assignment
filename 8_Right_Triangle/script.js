

let ans=document.getElementById("result");
str=""
function res(){
    let n=document.getElementById("rowNo").value;
    console.log(n);
    
    for(let i=0;i<n;i++){
       for(let j=n;j>i;j--){
        str+="* "
       }
       str+="\n";
    }
    ans.innerText=str;
}

