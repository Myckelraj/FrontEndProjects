const buttonElement=document.getElementById("btn")
const result=document.getElementById("bmi_result")
const weightCondition=document.getElementById("weight_condition");

function calcy(){
 const weightValue=document.getElementById("weight").value;
 const heightValue=document.getElementById("height").value/100;
const bmiResult= weightValue/(heightValue*heightValue);
result.value=bmiResult;

if(bmiResult<18)
{
    weightCondition.innerHTML="UnderWeight";
}else if(bmiResult>=25&&bmiResult<=29.9){
    weightCondition.innerHTML="OverWeight";
}else if(bmiResult>=18.5&&bmiResult<=24.9)
{
    weightCondition.innerHTML="Normal Weight";
}
else{

weightCondition.innerHTML="Obesity"
}
}
buttonElement.addEventListener("click",calcy);