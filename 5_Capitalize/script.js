let elem=document.getElementById("capName");

console.log(elem);
let ans=document.getElementById("result");
function res(){
    let name= elem.value;
    ans.innerText="Entered Name is: " + capitalName(name);
}

function capitalName(name){
    if(name[0]<='z' && name[0]>='a'){
        name = name[0].toUpperCase() + name.slice(1,)
        return name;
    }
    else{
        return name;
    }
}