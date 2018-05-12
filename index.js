//* **index.js**: The file containing the logic for the course of the game, 
//which depends on `Word.js` and:

//  * Randomly selects a word and uses the `Word` constructor to store it

 // * Prompts the user for each guess and keeps track of the user's remaining guesses

var showWord = require("./Word").showWord;
var Word = require("./Word");
var inquirer = require('inquirer');
const randomWord = require('random-word'); 


var wordGame= {
    randomWord : "",
    guessCount : 0,
    tempWord : "",
    showUnderlines: function(){
        var i=0;
        // var tempWord=[];
        for(i=0;i<this.randomWord.length;i++){
            if(this.randomWord.charAt(i) == " "){
                this.tempWord+=" ";
            }
            else{
                this.tempWord+='_';
            }
            
        }
        // var wordPrint = "";
        // for(i=0;i<tempWord.length;i++){
        //     wordPrint += (tempWord.charAt(i))+" ";
            
        // }
        // console.log(wordPrint);
        this.printinConsole();
    },
    startGame: function(){
        inquirer.prompt([
            {
                type: "confirm",
                name: "start",
                message: "Do you want to start the game?"
        
            }
        ]).then(function(startAnswer){
            //console.log(startAnswer);
            if(startAnswer.start){
                wordGame.randomWord =randomWord();
                console.log("***JUST FOR TEST PURPOSES******"+wordGame.randomWord+"************");//"eshgham";
                wordGame.guessCount = 15;
                wordGame.tempWord = "";
                wordGame.showUnderlines();
                wordGame.getInput();
        
            }
            else{
                console.log("Bye! See you soon!");
            }
        });
      

    },
    printinConsole: function(){
        var wordPrint = "";
        for(i=0;i<this.tempWord.length;i++){
            wordPrint += (this.tempWord.charAt(i))+" ";
            
        }
        console.log(wordPrint);
    },
    checkEnd: function(){
        var i=0;
        var finish = true;
        for(i=0;i<this.tempWord.length;i++){
            if(this.tempWord.charAt(i)==='_'){
                finish=false;
            }
        }
        return finish;
    },
    getInput: function(){
        var charInput;
        var strCorrect="";
    
       // console.log("this.guessCount"+this.guessCount);
        inquirer.prompt([
            {
                type: "input",
                name: "charInput1",
                message: "Enter your guess character?\n"+"You have "+wordGame.guessCount+" guess to make",
                when: wordGame.guessCount<=10
        
            },
            {
                type: "input",
                name: "charInput2",
                message: "Enter your guess character?",
                when: wordGame.guessCount>10
        
            }
        ]).then(function(guess){            
            if(guess){
                if(guess.charInput1){
                    charInput = guess.charInput1;
                }
                if(guess.charInput2){
                    charInput = guess.charInput2;
                }
                //Word.wordGuess(charInput);
                wordGame.guessCount--;
               // console.log("this.guessCount"+wordGame.guessCount);
                if(wordGame.guessCount>=0){
                //
                    //console.log(charInput);
                  
                   // console.log(wordGame.tempWord);
                   
                    strCorrect = wordGame.tempWord;
                    wordGame.tempWord= showWord(wordGame.randomWord,wordGame.tempWord,charInput);
                    if(strCorrect ===wordGame.tempWord){
                        console.log("\nYour guess "+charInput +" was wrong.\n");
                    }
                    // else{
                    //     console.log(wordGame.tempWord);
                    // }
                    
                    wordGame.printinConsole();
                    if(wordGame.checkEnd()){
                        console.log("Congratulation! You Won.");
                        wordGame.startGame();
                        
                    }
                    else{
                        wordGame.getInput();
                    }
                    
            }
        }
        }).catch((err) => {
            console.log(err);
          });;
    }
   
};
// var randomWord = wordGame.generateWord();
// var guessCount =15;
// var tempWord = "";
// wordGame.showUnderlines();
// wordGame.getInput();
wordGame.startGame();
