  var questions =[
           "What is the name of the Stark king who surrendered to Aegon the Conqueror?","Who were the original Lord Paramounts of the Reach before the Targaryens invaded?","What area makes the best wine in Westeros?", "Which of the following is considered one of the Free Cities?", "What is the name of the desert Daenarys crossed to reach Qarth?"

  ]

 var correctAnswer = [3,1,1,2,2];
var answer1 =["Bran", "The Gardeners","The Arbor","Qarth","The Red Sea"]
var answer2 =["Harren","The Tullys","The Citadel","Myr","The Red Waste"]
var answer3 =["Torren","The Tyrells","High Tower","Lannisport","The Red Desert"]
var answer4 =["Tywin","The Blackdragons","White Harbor","Storm's End","The Red Sands"]
var whatNumberAreWeOn = 0;

function changeNumber(){
    whatNumberAreWeOn = whatNumberAreWeOn+1
    if(whatNumberAreWeOn === 5){
        whatNumberAreWeOn = 0
        endGame()
    }
}

function endGame(){
    alert("You Rock! Cancel that!")
}

 loadQuestion();

 function loadQuestion(){
    document.getElementById("question").innerHTML=questions[whatNumberAreWeOn]
    document.getElementById("htmlanswer1").innerText=answer1[whatNumberAreWeOn]
    document.getElementById("htmlanswer2").innerText=answer2[whatNumberAreWeOn]
    document.getElementById("htmlanswer3").innerText=answer3[whatNumberAreWeOn]
    document.getElementById("htmlanswer4").innerText=answer4[whatNumberAreWeOn]
    
 }





document.getElementById("htmlanswer1").addEventListener("click", answer1clicked)
document.getElementById("htmlanswer2").addEventListener("click", answer2clicked)
document.getElementById("htmlanswer3").addEventListener("click", answer3clicked)
document.getElementById("htmlanswer4").addEventListener("click", answer4clicked)



function answer1clicked() {
    console.log("answer1clicked")

    if (correctAnswer[whatNumberAreWeOn] === 1) {
        alert("Correct!")
    } else {
        alert("Wrong!")
    }
    changeNumber()
    loadQuestion()
}

function answer2clicked() {
    console.log("answer2clicked")
    if (correctAnswer[whatNumberAreWeOn] === 2) {
        alert("Correct!")

    } else {
        alert("Wrong!")
    }
    changeNumber()
    loadQuestion()
}
function answer3clicked() {
    console.log("answer3clicked")

    if (correctAnswer[whatNumberAreWeOn] === 3) {
        alert("Correct!")
    } else {
        alert("Wrong!")
    }
    changeNumber()
    loadQuestion()
}
function answer4clicked() {
    console.log("answer4clicked")
    if (correctAnswer[whatNumberAreWeOn] === 4) {
        alert("Correct!")
    } else {
        alert("Wrong!")
    }
    changeNumber()
    loadQuestion()
}



