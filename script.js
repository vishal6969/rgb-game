const head=document.querySelector("#head");
const score=document.querySelector(".score");
var r;
var g;
var b;
const index=Math.round(5*Math.random());
var box=document.querySelectorAll(".boxes");
for(var i=0;i<6;i++){
const R=Math.round(255*Math.random());
const G=Math.round(255*Math.random());
const B=Math.round(255*Math.random());
    if(i==index){
    r=R;
    g=G;
    b=B;
    box[i].addEventListener("click",function(){
        box.forEach((e)=>{
            e.style.background="rgb("+r+","+g+","+b+")"});
            score.innerHTML="Correct!";
            document.querySelector(".play").style.display="block";
    });
    }
    else{
        box[i].addEventListener("click",function(){
            this.style.display="none";
            score.innerHTML="Try Again!";
        });
    }
console.log(index);
box[i].style.background="rgb("+R+","+G+","+B+")";
}
head.innerHTML="RGB("+r+","+g+","+b+")";