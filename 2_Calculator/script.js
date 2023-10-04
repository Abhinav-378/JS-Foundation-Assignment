function calc(){
    let i1=Number(document.getElementById("num1").value);
    let i2=Number(document.getElementById("num2").value);
    let op=document.getElementById("oper").value;

    switch (op) {
        case '+':
            console.log("Result : ", i1+i2);
            break;
        case '-':
            console.log("Result : ", i1-i2);
            break;
        case '*':
            console.log("Result : ", i1*i2);
            break;
        case '/':
            console.log("Result : ", i1/i2);
            break;
    
        default:
            console.log("Enter valid Number/operator");
            break;
    }
}