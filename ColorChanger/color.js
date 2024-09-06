const colorText= document.getElementById("colortext");
const buttonElement=document.getElementById("btn");
const wraper = document.getElementById("wrap");
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

buttonElement.addEventListener('click',function(){

    let hexcolor='#';
    for(let i=1;i<=6;i++){
        hexcolor+=hexvalue();
    }
wraper.style.backgroundColor=hexcolor;
colorText.innerHTML=hexcolor;
})

function hexvalue()
{
 let random= Math.floor(Math.random()*16);
 return hex[random];
}