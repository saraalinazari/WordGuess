# WordGuess

## Requirement
- Create a Word Guess command-line game using constructor functions.

## Prerequisites
- Check if you have Node installed by typing 'node -v' in your terminal. If it returns anything related to version then you have it installed.

## Instructions
- Type 'node index.js' in console.
- It asks you if you want to start the game, Y/N?
- As this application has educational purposes and to make it easier for test, it cheats and shows you the word to play between bunch of stars(*), as you can see below: 
![Image of word]('screenshots/screen2.png')
- Each time when user type a  character, it shows the character in the right place if the gues was right. If guess is not right, then shows you are wrong. The number of guesses is limited and if when user has equal or less than 10 guesses left, app shows the number of guesses left.
![Image of word]('screenshots/screen1.png')

## Technologies Used
- Node.js
- random-word NPM Package
- inquirer NPM Package

## Code Explanation
### Lesson Learned
- I learned how to use constructor functions.
- How to use modular programming.

### Code Highlights
```
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
```   

## Authors
- Sara Alinazari