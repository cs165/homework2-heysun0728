// TODO(you): Write the JavaScript necessary to complete the homework.

// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.
var chooseBox={};
var result_map={"blep":0,"happy":0,"sleeping":0,"dopey":0,"burger":0,"cart":0,"nerd":0,"shy":0,"sleepy":0};
var completeCount=0;
const checkboxes = document.querySelectorAll('.checkbox');
const result = document.querySelector('.result');
const restartBtn = document.querySelector('#restart_btn');
const checkdiv = document.querySelectorAll('.choice-grid div');
for (const div of checkdiv) {
    div.addEventListener("click", function(){
        if(completeCount!=3) answerClick(this);
    });
}    
console.log(restartBtn);
restartBtn.addEventListener("click",function(){
    restart();
})

//when checkbox is clicked
function answerClick(chosen){
    const questionId=chosen.dataset.questionId;
    checked(chosen,questionId);
    unchosen(chosen,questionId);
}

//change a box to checked style
function checked(box,questionId){
    //change checked box style
    box.querySelector(".checkbox").src = "images/checked.png";
    box.style.backgroundColor="#cfe3ff";
    box.style.opacity="1.0";
    //set chooseBox and completeCount
    if(!(questionId in chooseBox)) completeCount++;
    chooseBox[questionId]=box;
    //show result
    if(completeCount==3){
        showResult()
    }
}

function unchecked(box){
    box.querySelector(".checkbox").src ="images/unchecked.png";
    box.style.backgroundColor="#f4f4f4";
    box.style.opacity="0.6";
}

//change unchosen boxes to certain style
function unchosen(chosen,id){
    //change other boxes opacity
    boxes=document.querySelectorAll('[data-question-id="'+id+'"]');
    for(const box of boxes){
        if(!box.isEqualNode(chosen)){
            unchecked(box);
        }
    }
}

//display the result box
function showResult(){
    for(const index in chooseBox){
        console.log(chooseBox[index]);
        result_map[chooseBox[index].dataset.choiceId]++;
    }
    //console.log(result_map);
    var max=0;
    var maxIndex;
    for(const index in result_map){
        if(result_map[index]>max){
            max=result_map[index];
            maxIndex=index;
        }
        result_map[index]=0; //reset
    }
    if(max==1){
        maxIndex=chooseBox["one"].dataset.choiceId;;
    }
    //console.log(max);
    //console.log(maxIndex);
    result.querySelector("#title").innerHTML="You got: "+RESULTS_MAP[maxIndex]["title"];
    result.querySelector("#contents").innerHTML=RESULTS_MAP[maxIndex]["contents"];
    result.style.display="block";
}

//restart the puzzle
function restart(){
    result.style.display="none";
    completeCount=0;
    for(const index in chooseBox){
        unchecked(chooseBox[index]);
        boxes=document.querySelectorAll('.choice-grid div');
        for(const box of boxes){
            box.style.opacity="1";
        }
        delete chooseBox[index];
    }
    //console.log(chooseBox);
    //console.log(result_map);
    document.getElementById("pup").scrollIntoView(true);
}
