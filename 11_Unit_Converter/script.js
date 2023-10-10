function res(){
    let cel= document.getElementById("cel").value;

    let far=(Number(cel))*(1.8) + 32;
    far = far.toFixed(2);
    let output=document.getElementById("result")
    output.innerHTML= `Temperature in Farenheit is: ${far}`;
    console.log("yo")

}