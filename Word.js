
var generateLetter = require("./Letter").generateLetter;
var Word = function(underlyingWord,tempWord,charInput){
    this.underlyingWord= underlyingWord ;
    this.tempWord=tempWord;
    this.charInput=charInput;
    this.tempUnderWordArr=[];
    this.tempWordArr = [];
    this.length = this.underlyingWord.length;
    this.generateArray = function(){
        var i=0;
        //tconsole.log("tempWord"+tempWord);
        for(i=0;i<this.length;i++){
            this.tempUnderWordArr.push(this.underlyingWord.charAt(i));
            this.tempWordArr.push(this.tempWord.charAt(i));
            // console.log("this.tempUnderWordArr"+this.tempUnderWordArr);
            // console.log("this.tempWordArr"+this.tempWordArr);
        }
        
    };
    this.makeWord = function(){
        var i=0;

        for(i=0;i<this.length;i++){
            if(this.tempWordArr[i] === '_'){
                this.tempWordArr[i]= generateLetter(this.tempUnderWordArr[i],this.charInput);
           }
           

        }    

    };
    this.covertToStr= function(){
        var tempStr ="";
      //  console.log("this.tempWordArr"+this.tempWordArr);
        tempStr=this.tempWordArr.join("");
        return tempStr;
    };
    this.testi =function(){
        this.generateArray();
        this.makeWord();
        return this.covertToStr();
    };
};
    var showWord = function(underlyingWord,tempWord,charInput){
        var Word1 = new Word(underlyingWord,tempWord,charInput);
        Word1.generateArray();
        Word1.makeWord();
        var temp=Word1.covertToStr();
        //console.log(temp);
        return temp;
    }
    // this.wordGuess= function(char){
    //    return Letter.guess(char);

    // }


module.exports= {
  //  Word: Word,
    showWord:showWord
} 