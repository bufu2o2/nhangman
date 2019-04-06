const cl = (m) => {
    console.log(m);
}
const i = require("inquirer");
const iWord = require("./word");
const rand = (x) => {
    return Math.floor(Math.random() * x);
}
const fs = require("fs");
const hr = "\n=========================================================================\n";

let input = process.argv[2];
let rWord;

fs.readFile("wordBank.txt", (err,r) => {
    if(err){
        return cl(err);
    }
    rWord = r.toString().split("\r\n");
});



setTimeout(() => {
    game.setWord();
    message();
    gameStart();   
}, 1000);



const gameStart = () => {
    i.prompt([
        {
            message: "guess a letter",
            name: "letter",
        }
    ]).then((r) => {
        if(game.wordpro != game.word){
            game.display(r.letter);
            cl(game.wordpro);
            cl(game.word);
            if(game.wordpro === game.word) {
                return cl(hr + "\n\nYOU WIN!!!!!\n\n" + hr);
            }
            else if(r.letter === "exit"){
                return cl(hr + "\n\nNobody likes a Quitter!\n\n" + hr);
            }
            else{
                gameStart();
            }   
        }
        else{
           
        }
    });

    
}



let game = {
    wordFormatter: (w) => {
        return w.trim().split(" ").join("").toLowerCase();
    },
    word: "",
    setWord: () => {
        game.word =  game.wordFormatter(rWord[rand(rWord.length)]);
    },
    display: (ul) => {
        let test = new iWord(game.word);
        game.wordpro = test.display(game.wordpro, ul);
    },
    wordpro: "",
}

let message = () => {
    cl(hr);
    cl("\nGame is starting!\n");
    cl("Don't forget, if you want to exit just type the word exit\n");
    cl(hr);
}



