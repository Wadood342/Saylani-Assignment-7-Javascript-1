const alertMyName= document.querySelector("#alertNameButton");
const alertMyNum= document.querySelector("#alertNumButton");
const varName= document.querySelector("#varNameButton");
const showCamelCase= document.querySelector("#camelCaseButton");
const sumBtn= document.querySelector("#sumButton");
const subBtn= document.querySelector("#subButton");
const mulBtn= document.querySelector("#mulButton");
const divBtn= document.querySelector("#divButton");
const calBtn= document.querySelector("#calButton");
const ogStatement= document.querySelector("#statementSection");
const clear= document.querySelector("#clearStatementButton");
const result= document.querySelector("#outputSection");
const clearOp= document.querySelector("#clearOutputButton");



function alertName(){
    alert("Muhammad Abdul Wadood Afzal")
}

function alertNum(){
    alert(923437920342);
}

function addVariable (){
ogStatement.innerText="Variable Number";
result.innerText="Variable Number";

}

function camelCase(){
    ogStatement.innerText="variableNumber";
    result.innerText="variableNumber";
    
}

function addition(){

    let b =3;
    let a =31;
    let sum= a+b;
    ogStatement.innerHTML= `a = ${a} and b = ${b} <br> The Sum of a and b is given below`;
    result.innerText=`Sum of Numbers is ${sum}` ;
}

function subtraction(){

    let b =3;
    let a =31;
    let sub= a-b;
    text=ogStatement.innerHTML= `a = ${a} - b = ${b} <br> The Subtraction of a and b is given below `;
    output= result.innerText=`Subtraction of Numbers is ${sub} ` ;
}
function division(){

    let b =3;
    let a =31;
    let div= a/b;
    ogStatement.innerHTML= `a = ${a} / b = ${b} <br> The division of a and b is given below`;
    result.innerText=`Division of Numbers is ${div}` ;
}
function multiply(){

    let b =3;
    let a =31;
    let mul= a*b;
    text=ogStatement.innerHTML= `a = ${a} * b = ${b} <br> The Multiplication of a and b is given below`;
    output= result.innerText=`Multiplication of Numbers is ${mul}` ;
}
function anyTwo(){
    let a = 2;
    let b = 3;
    let c = 10;
    let d = 2;
    let e = 12;
    let equal = a/b+c**d-e;
    ogStatement.innerText= ` Solve this Expression ${a} /${b} + ${c}**${d}-${e} `;
    result.innerText=`Answer of above Expression is ${equal}` ;
}

function clearBtn() {
    ogStatement.innerText=" ";
    
}


function clearOutput() {
    result.innerText=" ";
    
}

function clearAll()
{
    ogStatement.innerText=" ";
    result.innerText=" ";

}