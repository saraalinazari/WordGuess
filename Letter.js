//* **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display
// an underlying character or a blank placeholder (such as an underscore), depending on whether or
// not the user has guessed the letter. That means the constructor should define:

//  * A string value to store the underlying character for the letter

//  * A boolean value that stores whether that letter has been guessed yet

//  * A function that returns the underlying character if the letter has been guessed, or a
// placeholder (like an underscore) if the letter has not been guessed

//  * A function that takes a character as an argument and checks it against the underlying character,
// updating the stored boolean value to true if it was guessed correctly

var Letter = function(char){
    this.char = char;
    this.guessed = false;
    this.makeTemp = function(){
        var tempchar="";
        if(this.guessed){
            tempchar= this.char;
        }
        else{
            tempchar = '_';
        }
        return tempchar;
    };
     
    this.guess = function(inputChar){
        if(inputChar == this.char){
            this.guessed = true;
        }
        else this.guessed=false;
    };
    
};
var generateLetter = function(inputChar,underlyingChar){
    var Letter1 = new Letter(underlyingChar);
    Letter1.guess(inputChar);
    // console.log("gues"+Letter1.guessed);
    var char = "";
    // console.log("char"+char);
    char = Letter1.makeTemp();
    return char;
}
module.exports= {
    Letter: Letter,
    generateLetter:generateLetter
} 