let loadingBar=document.getElementById("loading");
let loadingMsg=document.getElementById("ProgressMsg");
console.log(loadingBar,loadingMsg);

let barWidth=0;

let dowload=()=>{
    barWidth++;
    loadingBar.style.width=`${barWidth}%`;
    setTimeout(()=>{
        loadingMsg.innerHTML=(barWidth==100)?`${barWidth} Completed`:`${barWidth} Progressing`;
    },1000) 
}

let id1=setInterval(()=>{
    if(barWidth==100){
        clearInterval(id1);
    }
    else{
        dowload();
    }
},100)