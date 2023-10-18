window.onscroll = function(){
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollWin = document.documentElement.scrollTop;

    let perc = (scrollWin/height)*100;

    document.getElementById("progressBar").style.width = perc + "%";
    console.log(perc);
}