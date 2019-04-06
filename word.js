const cl = (m) => {
    console.log(m);
}

const input = process.argv[2];


let lcon = require("./letter");

let Word = function(word){
    this.wMaker = () => {
        return word.trim().toLowerCase().split("");
    }
    this.cwMaker = (w) => {
        return w.trim().toLowerCase().split("");
    }
    this.ulMaker = (ul) => {
        return ul.trim().toLowerCase();
    }
    this.display = (cw, ul) => {
        let newWord = this.wMaker();
        let newCw = this.cwMaker(cw);
        let newT = "";
        let newUl = this.ulMaker(ul);
        for(let i=0; i<newWord.length; i++){
            let t = new lcon(newWord[i], newUl);
            if(newCw[i] != newWord[i]){
                newT = newT + " " + t.switch();
            }
            else{
                newT = newT + " " + newCw[i];
            }
        }
        cl(newT.trim());
        newT = newT.trim().split(" ").join("");
        //cl(newT);
        return newT.trim();
    }
    this.check = (ulIn) => {
        let splitW = this.wMaker();
        let ul = this.ulMaker(ulIn);
        for(let i=0; i<splitW.length; i++){
            let newUl = new lcon(splitW[i], ul);
            let t = newUl.checker();
            return cl(this.display(ul));
        }   
    }
}

// let test = new Word("abcdefghijklmnopqrstuvwxyz");
// // cl("this is the word after being tested     " + test.display(input));
// test.check(input);
// test.check("e");


module.exports = Word;