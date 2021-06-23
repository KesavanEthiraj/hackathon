
// create container
const div1 =document.createElement("div");
div1.setAttribute('class', 'div1');
document.body.appendChild(div1);
// first row
const ro1 =document.createElement("tr"); 
div1.appendChild(ro1);
const co1 =document.createElement("td"); 
co1.setAttribute('id', 'tdid1');
 // crating container to store the result
 var div9 =document.createElement("div"); 
 div9.setAttribute('class', 'input');
 div9.setAttribute('id', 'result');
 
 ro1.appendChild(co1)
 co1.appendChild(div9).innerText="";
 document.getElementById("tdid1").colSpan ="6";

// mathematical content assignment
// % indicates modulus operation
let a = ["."];
var b = a.map(x=>+x);
const data=[[""],['+',' - ','*','/','%'],[7,8,9,'M+','='],[4,5,6,'M-'],[1,2,3,'MC'],[0,'.',"C","AC"]]
console.log(data[0][0])
 for(i=0; i<6;i++)
 { 
     if(i==0)
     {  // crating inputfield to give input
        const ro =document.createElement("tr"); 
        div1.appendChild(ro);
        const co =document.createElement("td"); 
        co.setAttribute('id', 'tdid');
         
        var input =document.createElement("input"); 
        input.setAttribute('class', 'input');
        input.setAttribute('type','text');
        ro.appendChild(co).innerText=input.innerText;
        co.appendChild(input).value="";
        document.getElementById("tdid").colSpan ="6";
     }

     else{
        const ro =document.createElement("tr"); 
        div1.appendChild(ro);
        for(j=0;j<5; j++)
        { // crating buttons to give input
            if(data[i][j]!=undefined)
             {
           const co =document.createElement("td"); 
   
            co.setAttribute('id', data[i][j]);
            co.setAttribute('class', 'tdclass');
            const button =document.createElement("button"); 
            button.setAttribute('id', "tdid"+i+j);
            button.setAttribute('onclick', "function1(this.id)");
            ro.appendChild(co);
            co.appendChild(button).innerText=data[i][j];
    
           if(i==2){
             if(j==4)
              {
            document.getElementById(data[i][j]).rowSpan ="4";  
              }
                   }
   }
 }
}
 }
 //Initialization
 let number="";
 let n=0
 let m=0;
 var totalvalue=0;
var total=0;
var in1=0
let finalarray=[];
// function for clicked events
 function function1(clicked_id)
 { 
   // the condition only allows number and mathematical operator to input field
  if((clicked_id!="tdid"+2+3)&&(clicked_id!="tdid"+3+3)&&(clicked_id!="tdid"+4+3)&&(clicked_id!="tdid"+5+3)&&(clicked_id!="tdid"+5+2))
  input.value= input.value+document.getElementById(clicked_id).innerText
 
 input.value=[input.value]
 console.log(input.value.split(""))
var b=input.value;
// after giving equal sign, Arranging the input to perform mathematical operation in the order of division,multiplication,subtraction and division
if(clicked_id=="tdid"+2+4){
for(i=0;i<b.length;i++)
{
  if((b[i]!="/")&&(b[i]!="+")&&(b[i]!="-")&&(b[i]!="*")&&(b[i]!="%")&&(b[i]!="=")){
  number=number+b[i]
}
  if((b[i]=="/")||(b[i]=="+")||(b[i]=="-")||(b[i]=="*")||(b[i]=="%")){
      finalarray.push(number);
      finalarray.push(b[i]);
      number="";
    }
  if(i==b.length-1)
 {
  finalarray.push(number);
   number="";
 }
 }
// to search division operator
 for (i=0;i<finalarray.length;i++){
   if(finalarray[i]=="/"){
     division(finalarray[i-1],finalarray[i+1])
     finalarray.splice(finalarray.indexOf(finalarray[i]),2)
     finalarray[i-1]=result;
     i=0;
   }
 }
// function for division
 function division(input1,input2){
 result=+input1/+input2
 result=result.toFixed(2);
 return result
 }
// to search multiplication operator
 for (i=0;i<finalarray.length;i++){
  if(finalarray[i]=="*"){
    multiplication(finalarray[i-1],finalarray[i+1])
    finalarray.splice(finalarray.indexOf(finalarray[i]),2)
    finalarray[i-1]=result;
    i=0;
  }
}
// function for multiplication
function multiplication(input1,input2){
result=+input1*+input2
return result
}
//// to search addition operator
for (i=0;i<finalarray.length;i++){
  if(finalarray[i]=="+"){
    addition(finalarray[i-1],finalarray[i+1])
    finalarray.splice(finalarray.indexOf(finalarray[i]),2)
    finalarray[i-1]=result;
    i=0;
  }
}
// function for addition
function addition(input1,input2){
result=+input1+ +input2
return result
}
// to search subtraction operator
for (i=0;i<finalarray.length;i++){
  if(finalarray[i]=="-"){
    Subtraction(finalarray[i-1],finalarray[i+1]);
    finalarray.splice(finalarray.indexOf(finalarray[i]),2)
    finalarray[i-1]=result;
    i=0;
  }
}
//// function for subtraction
function Subtraction(input1,input2){
result=+input1- +input2
return result
}
// to search modulus operator
for (i=0;i<finalarray.length;i++){
  if(finalarray[i]=="%"){
    modulus(finalarray[i-1],finalarray[i+1]);
    finalarray.splice(finalarray.indexOf(finalarray[i]),2)
    finalarray[i-1]=result;
    i=0;
  }
}
//// function for modulus
function modulus(input1,input2){
result=+input1 % +input2
return result
}
div9.innerText=finalarray[0]
input.value=finalarray[0];
finalarray=[];
   }
  //  
   //
   if(clicked_id=="tdid"+5+2){
    input.value=""
    input1.value="";
  }
  if(clicked_id=="tdid"+5+3){
    input.value="0" 
  }

  }

  window.onkeypress = function(event) {
     console.log(event.keyCode)
    if( (event.keyCode < 48)||(event.keyCode > 57)){
      alert("Only numbers are allowed")
  }

//   window.onkeypress = function(event) {
//     if ((event.keyCode !== 50)&&(event.keyCode !== 49)&&(event.keyCode !== 51)&&(event.keyCode !== 52)&&(event.keyCode !== 53)
//     &&(event.keyCode !== 54)&&(event.keyCode !== 55)&&(event.keyCode !== 56)&&(event.keyCode !== 57)&&(event.keyCode !== 48)) {
//     alert("Only numbers are allowed")
//     }
  }
