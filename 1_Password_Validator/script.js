function check(){
    let i1=document.getElementById("inp1").value;
    let i2=document.getElementById("inp2").value;
    if(i1==i2){
        console.log("Password Matched. Password validation Successful.");
    }
    else{
        console.log( "Password didn't match. Password validation unsuccessful" );
    }
}