let yourName="Armando";
/*if(confirm("Are you "+yourName+"?")){
    console.log("Hello "+yourName);
}else{
    console.log("Then what is your name?");
}
*/

//What's the difference between == and ===?
console.log("1" == 1); //true
console.log("1" === 1);//false
console.log(1 === 1);//true

/*
The == compares value while === compares both value
and data type.
*/
/*
if(number==99){
    console.log("The number is correct");
}

let num1= Number(prompt("Please enter a number:"));
let num2= Number(prompt("Please enter a number:"));
if(num1<num2){
    console.log("num1 is smaller than num2");
}else if(num1>num2){
    console.log("num1 is greater than num2");
}else{
    console.log("They are equal");
}

let num1 = 1;
let num2 = 2;
let num3 = 3;
let notTrue = false;

if(num1<num2 && num3>num2){
    console.log("num1 is smaller than num2 AND num3 is larger than num2");
}

if(num1==1 || num2==1 || num3==1 ){
    console.log("num1 is 1 OR num2 is 1 OR num3 is 1");
}

if(!notTrue){
    console.log("NOT not true is true!");
}
*/

console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log("-----------------");

for(let i=0; i<6;i=i+1){
    console.log(i);
}

console.log("-----------------");
for(let j=2; j<=20; j=j+2){
    console.log(j);
}