
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
    var char = "";
    char = Letter1.makeTemp();
    return char;
}
module.exports= {
    Letter: Letter,
    generateLetter:generateLetter
} 