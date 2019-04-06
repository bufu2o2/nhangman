const cl = (m) => {
    console.log(m);
}

let Letter = function(gl, ul){
    this.gl = gl.toLowerCase().trim();
    this.ul = ul.toLowerCase().trim();
    this.correct = false;
    this.switch = () => {
        this.checker();
        if(this.correct){
            return this.ul;
        }
        else{
            return "_";
        }
    }
    this.checker = () => {
        if(this.gl === this.ul){
            this.correct = true;
            return true;
        }
        else{
            return false;
        }
    }
    // this.cNsw = () => {
    //     this.checker();
    //     this.switch();
    // }
}


// let test = new Letter("a", "A");
// cl("this is gl: " + test.gl);
// cl("this is ul: " + test.ul);
// cl("this is correct status: " + test.correct);
// cl("Running Checker... ");
// test.checker();
// cl("Running Switch .... returns " + test.switch());


module.exports = Letter;