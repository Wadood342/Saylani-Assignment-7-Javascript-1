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


// Name
function alertName(){
    let naam = "Muhammad Abdul Wadood Afzal"
    alert(naam);
}



// Number
function alertNum(){
    let phone= '+92 343 7920342'
    alert(phone);
}



// Variable Number
function addVariable (){
    let varNum = "Variable Number"
ogStatement.innerText=varNum;
result.innerText=varNum;

}


// Camel Case
function camelCase(){
let strg = "variableNumber"
    ogStatement.innerText=strg;
    result.innerText=strg;
}


// Addition
function addition(){
    let b =3;
    let a =31;
    let sum= a+b;
    ogStatement.innerHTML= `a = ${a} and b = ${b} <br> The Sum of a and b is given below`;
    result.innerText=`Sum of Numbers is ${sum}` ;
}



// Subtraction
function subtraction(){
    let b =3;
    let a =31;
    let sub= a-b;
    ogStatement.innerHTML= `a = ${a} and b = ${b} <br> The Subtraction of a and b is given below `;
    result.innerText=`Subtraction of Numbers is ${sub} ` ;
}


// division
function division(){
    let b =3;
    let a =31;
    let div= a/b;
    ogStatement.innerHTML= `a = ${a} and b = ${b} <br> The division of a and b is given below`;
    result.innerText=`Division of Numbers is ${div}` ;
}


// Multiplication
function multiply(){
    let b =3;
    let a =31;
    let mul= a*b;
    ogStatement.innerHTML= `a = ${a} and b = ${b} <br> The Multiplication of a and b is given below`;
    result.innerText=`Multiplication of Numbers is ${mul}` ;
}




// Solve this Expression
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



// Clear Orignal Button
function clearBtn() {
    ogStatement.innerText=" ";
    
}

// Clear Output button
function clearOutput() {
    result.innerText=" ";
    
}

// All Clear Button
function clearAll()
{
    ogStatement.innerText=" ";
    result.innerText=" ";

}