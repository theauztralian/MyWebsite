'use strict';

//iife
(function(){
    
    var name="My Awesome Game";
    
    var myArray = new Array(6);
    var i = 0;
    for (i = 0; i < myArray.length; i += 1) {
        myArray[i] = new Array(6);
    }


    //var blueSquare = {trueColor: "blue", correctColor: ""};
    //var yellowSquare = {trueColor: "yellow", correctColor: ""};
    //var greySquare = {trueColor: "gray", correctColor: ""};
    //var staticBlueSquare = {trueColor: "blue", correctColor: ""};
    //var staticYellowSquare = {trueColor: "yellow", correctColor: ""};

    myArray[0][0] = "red";
    myArray[0][1] = "gray";
    myArray[0][2] = "gray";
    myArray[0][3] = "gray";
    myArray[0][4] = "red";
    myArray[0][5] = "gray";

    myArray[1][0] = "red";
    myArray[1][1] = "gray";
    myArray[1][2] = "gray";
    myArray[1][3] = "gray";
    myArray[1][4] = "gray";
    myArray[1][5] = "gray";

    myArray[2][0] = "gray";
    myArray[2][1] = "gray";
    myArray[2][2] = "green";
    myArray[2][3] = "gray";
    myArray[2][4] = "gray";
    myArray[2][5] = "green";

    myArray[3][0] = "gray";
    myArray[3][1] = "green";
    myArray[3][2] = "gray";
    myArray[3][3] = "gray";
    myArray[3][4] = "gray";
    myArray[3][5] = "green";

    myArray[4][0] = "gray";
    myArray[4][1] = "gray";
    myArray[4][2] = "red";
    myArray[4][3] = "gray";
    myArray[4][4] = "red";
    myArray[4][5] = "gray";

    myArray[5][0] = "gray";
    myArray[5][1] = "gray";
    myArray[5][2] = "gray";
    myArray[5][3] = "gray";
    myArray[5][4] = "gray";
    myArray[5][5] = "gray";

    var answerArray = new Array(6);
    var i = 0;
    for (i = 0; i < answerArray.length; i += 1) {
        answerArray[i] = new Array(6);
    }

    answerArray[0][0] = "red";
    answerArray[0][1] = "red";
    answerArray[0][2] = "green";
    answerArray[0][3] = "green";
    answerArray[0][4] = "red";
    answerArray[0][5] = "green";

    answerArray[1][0] = "red";
    answerArray[1][1] = "green";
    answerArray[1][2] = "red";
    answerArray[1][3] = "green";
    answerArray[1][4] = "green";
    answerArray[1][5] = "red";

    answerArray[2][0] = "green";
    answerArray[2][1] = "red";
    answerArray[2][2] = "green";
    answerArray[2][3] = "red";
    answerArray[2][4] = "red";
    answerArray[2][5] = "green";

    answerArray[3][0] = "red";
    answerArray[3][1] = "green";
    answerArray[3][2] = "red";
    answerArray[3][3] = "red";
    answerArray[3][4] = "green";
    answerArray[3][5] = "green";

    answerArray[4][0] = "green";
    answerArray[4][1] = "green";
    answerArray[4][2] = "red";
    answerArray[4][3] = "green";
    answerArray[4][4] = "red";
    answerArray[4][5] = "red";

    answerArray[5][0] = "green";
    answerArray[5][1] = "red";
    answerArray[5][2] = "green";
    answerArray[5][3] = "red";
    answerArray[5][4] = "green";
    answerArray[5][5] = "red";

    function createTable() {
        var body = document.getElementById("game");
        var tbl = document.createElement("table");
        var tblBody = document.createElement("tbody");

        for (var row = 0; row < 6; row++) {
            var tr = document.createElement("tr");

            for (var cell = 0; cell < 6; cell++) {
                var td = document.createElement("td");
                td.id = row + "" + cell;
                var cellText = document.createTextNode(myArray[row][cell]);
    //            var cellText = document.createTextNode("cell in row "+row+", column "+cell);
                td.appendChild(cellText);

                td.addEventListener("click", changeColorForward); 
    //                var td = this.style.backgroundColor;
    //                if(td.className == "noMove";){ 
                if(td.innerText == "red"){
                    td.setAttribute("class", "noMove");//makes them untouchable
                    td.style.backgroundColor = "red";
                    td.innerHTML = " ";
                }
                else if(td.innerText == "green"){
                    td.setAttribute("class", "noMove");//makes them untouchable
                    td.style.backgroundColor = "green";
                    td.innerHTML = " ";
                }
                else if(td.innerText == "gray"){
                    td.style.backgroundColor = "gray";
                    td.innerHTML = "";
                }
                tr.appendChild(td);
            }
            tblBody.appendChild(tr);
        }
        tbl.appendChild(tblBody);
        
        
        body.appendChild(tbl);
//        body.appendChild(tbl);
        tbl.setAttribute("border", "6");
    }
    createTable();

    function changeColorForward(){
        if (this.innerHTML != " ") {
            if(this.style.backgroundColor == "red"){
                this.style.backgroundColor = "green";
            }
            else if(this.style.backgroundColor == "green"){
                this.style.backgroundColor = "gray";
            }
            else if(this.style.backgroundColor == "gray"){
                this.style.backgroundColor = "red";
            }
            if(checkbox.checked){
                checkBoxes();
            }
        }
    }

    //Check button function
    var checkbox = document.getElementById("mistakes");
    function checkBoxes(){

        var td = document.getElementsByTagName("td");

        for(var x = 0; x < answerArray.length; x += 1){
            for(var y = 0; y < answerArray[x].length; y += 1){
                for(var i = 0; i < td.length; i +=1){
                    if(td[i].id == x + "" + y){
                        if(td[i].style.backgroundColor != answerArray[x][y] && checkbox.checked){
                            if(td[i].style.backgroundColor != "gray"){
                                //color is wrong
                                td[i].style.border = "2px solid blue";
    //                            alert ("Something is wrong");
                            } 
                            else {
    //                            td[i].innerHTML = "";
                                td[i].style.border = "";
    //                            alert ("So far so good");
                            }
                        }
                        else {
    //                        td[i].innerHTML = "";
                            td[i].style.border = "";
                        }
                    } 
                }
            }
        }
    }
    checkbox.addEventListener("click", checkBoxes);
    //answer button function

    function finishHim(){
        var finish = document.getElementById("answer");
        var check = 0;
        var isWrong = 0;
        var td = document.getElementsByTagName("td");
        for(var x = 0; x < answerArray.length; x += 1){
            for(var y = 0; y < answerArray[x].length; y += 1){
                for(var i = 0; i < td.length; i +=1){
                    if(td[i].id == x + "" + y){
                        if(td[i].style.backgroundColor != answerArray[x][y]){
                            check -= 1;
                        }
                        else{
                            check +=1;
                        }
                        if(check == 36){
                            alert ("Congratulations, Looks like you're at least kinda S-M-R-T!!");
                            isWrong = 2;
                        }
                        else if(check < 36){
                            if(td[i].style.backgroundColor != "gray"){//if somethings wrong other than grey
                               if(td[i].style.backgroundColor != answerArray[x][y]){
                                   isWrong = 1;
                               } 
                            }   
                        }                
                    }  
                }
            }
        }
        if(isWrong == 0){
            alert("you're getting there, no mistakes");
        }
        if(isWrong == 1){
            alert("Oops, looks like you made a mistake, what a loser");
        }
    };
    answer.addEventListener("click", finishHim);

    function getHint(){
        var td = document.getElementsByTagName("td");
        var randomIndex = Math.floor(Math.random() * 35);
        var hint = document.getElementById("hint");

    //    for(var i = 0; i < td.length; i +=1){
            if(td[randomIndex].style.backgroundColor == "gray"){
                td[randomIndex].style.backgroundColor = answerArray[x][y];
                console.log(td[x][y]);
                console.log(answerArray[x][y]);
            }
    //    }
    };
    hint.addEventListener("click", getHint);
    
    
})();

//6x6 grid of numbers


//check if solved
//    if(answerArray[row][cell] == myArray[row][cell]){
//        echo "Puzzle is complete and correct";
//        
//    }
//    else if(answerArray[row][cell] == myArray[row][cell]){
//        echo "Something is wrong";
//        
//    }
//    else if(x == 2){
//        echo "So far so good";
//    }

//
//