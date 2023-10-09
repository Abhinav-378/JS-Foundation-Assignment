let vowel="aeiouAEIOU";
let n=document.getElementById("vName");
let ans=document.getElementById("result");
function res(){
    let name=n.value;
    ans.innerText = "No. of vowels in entered name is: " + vowelName(name);
}

function vowelName(name){
    let cnt=0;
    let nlen = name.length;
    let vlen = vowel.length;
    for(let i=0;i<nlen;i++){
        for(let j=0;j<vlen;j++){
            if(name[i]==vowel[j]){
                cnt++;
            }
            
        }
    }
    return cnt;

}