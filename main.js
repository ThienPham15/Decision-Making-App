/*
Have user name 
Have user question
Log to console name and question

Random create a number from 1-10
Assign random statements for each number
Log to console the answer corresponding to random number
*/

function decisionMaking() {
    const userName = document.querySelector("#name").value;
    const userQuestion = document.querySelector("#question").value;
    let greeting = document.querySelector("#greeting");
    let answer = document.querySelector("#answer"); 

    let greetingText;
    let answerText;

    if (userName.length == 0) { 
        greetingText = "Hello!"; 
    } else {
        greetingText = `Hello ${userName}!`;
    }

    if (userQuestion.length == 0) {
        answerText = "Please give your question!"; 
        questionRepeat.textContent = "";
    } else {
        const randomNum = (Math.floor(Math.random() * 10) + 1);
        switch (randomNum) {
            case 1:
                answerText = "Trust your instincts and take the leap";
                break;
            case 2:
                answerText = "Hmm, better try again later";
                break;
            case 3:
                answerText = "Consider all options before making a move"; 
                break;
            case 4:
                answerText = "Outlook is bright, proceed with confidence"; 
                break;
            case 5:
                answerText = "Signs point to unexpected opportunities";
                break;
            case 6:
                answerText = "It's a toss-up, make a choice and see what happens";
                break;
            case 7: 
                answerText = "Take a step back and reassess before moving forward"; 
                break;
            case 8:
                answerText = "Not the right time, patience will bring better results";
                break;
            case 9:
                answerText = "Go away!";
                break;
            case 10:
                answerText = "Wait";
                break;
        }
    }
    greeting.textContent = greetingText;
    answer.textContent = answerText;
}

function answerBoxAppear() {
    const appear = document.querySelector("#answerBox");
    appear.style.display = "block";
}