

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
      
        for(i=0;i<this.randomWord.length;i++){
            if(this.randomWord.charAt(i) == " "){
                this.tempWord+=" ";
            }
            else{
                this.tempWord+='_';
            }
            
        }
        
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
           
            if(startAnswer.start){
                wordGame.randomWord =randomWord();
                console.log("***JUST FOR TEST PURPOSES******  "+wordGame.randomWord+"  ************");//"eshgham";
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
                
                wordGame.guessCount--;
    
                if(wordGame.guessCount>=0){
                
                    strCorrect = wordGame.tempWord;
                    wordGame.tempWord= showWord(wordGame.randomWord,wordGame.tempWord,charInput);
                    if(strCorrect ===wordGame.tempWord){
                        console.log("\nYour guess "+charInput +" was wrong.\n");
                    }                    
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

wordGame.startGame();
