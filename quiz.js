function check(){

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var question5 = document.quiz.question5.value;
var question6 = document.quiz.question6.value;
var question7 = document.quiz.question7.value;
var question8 = document.quiz.question8.value;
var question9 = document.quiz.question9.value;
var question10 = document.quiz.question10.value;
var correct = 0;

if(question1 == "d"){
    correct++;
}
if(question2 == "c"){
    correct++;
}
if(question3 == "b"){
    correct++;
}
if(question4 == "c"){
    correct++;
}
if(question5 == "a"){
    correct++;
}
if(question6 == "b"){
    correct++;
}
if(question7 == "a"){
    correct++;
}
if(question8 == "d"){
    correct++;
}
if(question9 == "b"){
    correct++;
}
if(question10 == "b"){
    correct++;
}

    alert("You "+ correct +" correct");
}