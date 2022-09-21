let Question = function (text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

var i = 1;
var result=0;

Question.prototype.checkAnswer = function (picked) {
    if (picked == this.answer) {
        return result++;
    }
    else{
        return result;
    }
}

var q1 = new Question("What's the best programming language?", ["php", "c#", "javascript", "pyhton"], "javascript")
var q2 = new Question("What's the most popular language?", ["c++", "c#", "Java", "javascript"], "javascript")
var q3 = new Question("What's the most modern language?", ["php", "javascript", "c#", "pyhton"], "javascript")

showQuestion(i)

function showQuestion(index) {
    i = index
    switch (i) {
        case 1:
            sorular(q1);
            break;
        case 2:
            sorular(q2);
            break;
        case 3:
            sorular(q3);
            break;
        default:
            $("#icerik").html("<p>Result</p> Your score : "+result)
    }
}

function sorular(questions){
            $("#soru").text(questions.text);
            $("#btn1").text(questions.choices[0]); 
            $("#btn2").text(questions.choices[1]); 
            $("#btn3").text(questions.choices[2]); 
            $("#btn4").text(questions.choices[3]);
            $("#altBaslik").text("Question " + i + " of 3")
}

$(document).ready(function () {

    $("button").on("click", function () {
        
        switch(i){
            case 1:
                console.log(q1.checkAnswer($(this).text()));
                break;
            case 2:
                console.log(q2.checkAnswer($(this).text()));
                break;
            case 3:
                console.log(q3.checkAnswer($(this).text()));
                break;
        }
        i++;
        showQuestion(i)
    })
});
