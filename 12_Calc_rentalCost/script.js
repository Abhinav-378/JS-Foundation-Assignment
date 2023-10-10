function res(){
    let days=document.getElementById("days").value;
    days=Number(days);
    let result=0;
    if((document.getElementById('eco').checked)){
        result=4000*days;
    }
    else if(document.getElementById('mid').checked){
        result=10000*days;
    }
    else if(document.getElementById('lux').checked){
        result=20000*days;
    }

    document.getElementById("result").innerText=`Rental cost is: ${result}`
}