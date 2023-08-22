
function bubble_maker(){
    var clutter="";

    for(var i=0 ; i<160; i++){
        num=Math.floor(Math.random()*10);
         clutter +=`<div class="bubble">${num}</div>`;
                   
    }
    
    document.querySelector("#btp").innerHTML=clutter;
}
 var time=60;
 var score=0;
 var num_clic=0;

 function timer(){
    
    setInterval(function(){
        if(time>0){time--;
            var value=document.querySelector("#timer").textContent=time;}
            else{
                clearInterval(value);
            }


   
    },1000);
    

 }
 var num=0;

  function hit(){
     num=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=num;
    console.log(num);
  }

  function inc_score(){
     score+=10;
     document.querySelector("#scoreval").textContent=score;
        
    }

  document.querySelector("#btp").addEventListener("click",function (e) {
     num_clic=Number(e.target.textContent);
    console.log(num_clic);
    if(num===num_clic){
      inc_score();
    }
});

hit();
timer();
bubble_maker();

