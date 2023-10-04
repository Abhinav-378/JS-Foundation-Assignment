let x=document.getElementById("color1");
let y=document.getElementById("color2");
let answer=document.getElementById("result");

function res(){
    let c1=x.value;
    let c2=y.value;
    let ans=check(c1,c2);
    answer.innerText="Result: "+ans;
    answer.style.color=ans;

}

function check(c1,c2){
    if(c1=="red" && c2=="blue" || c2=="red" && c1=="blue"){
        return "purple";
    }
    else if(c1=="red" && c2=="yellow" || c2=="red" && c1=="yellow"){
        return "orange";
    }
    else if(c1=="blue" && c2=="yellow" || c2=="blue" && c1=="yellow"){
        return "green";
    }
    else{
        return "Invalid Combination";
    }

}