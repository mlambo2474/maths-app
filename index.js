
//creating random number variables to use in our question
const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
//console.log(num1, num2)
const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");

//manipulating the math question for the game
questionEl.innerText = 'What is ' + (num1) + ' multiply by '+ (num2)
 const correctAns = num1 * num2 ;

 let score = JSON.parse(localStorage.getItem("score"));
 if(!score){
    score = 0
 }
 scoreEl.innerText = 'score: ' + (score)
//manipulating the the form by listening to the
// submit btn when the user answer the question
formEl.addEventListener("submit", ()=>{
    //here we then assign the user answer to the input value
    const userAns = +input.value
    //the + sign is to make the input a number
    // because it is a string by default
    //**console.log(userAns, typeof userAns);

     //comparing the userAns and the correctAns
     if( userAns == correctAns){
        score++
       // console.log(score)
       updateLocalStorage()
     }else{
        score--
       //console.log(score)
       updateLocalStorage()

     }
 });

 function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
    
 } ;
