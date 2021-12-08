var cnt = 0;

var withInterval = () => {

    let output = document.getElementById('output');
    output.innerHTML = '';

    let myinterval = setInterval(() => {
        if (cnt == 5) {
            console.log("cnt = 5 with Interval :O");
            output.innerHTML += ' cnt = 5 with Interval :O';
            clearInterval(myinterval);
            cnt = 0;
        } else {
            cnt++;
            console.log(cnt);
            output.innerHTML += cnt;
        }
    }, 300);
}

var withWhile = () => {

    let fizz = document.getElementById('fizz').value;
    let buzz = document.getElementById('buzz').value;
    let limit = document.getElementById('limit').value;
    let errMessage = document.getElementById('errMessage');
    let output = document.getElementById('output');
    let fizzString = '';

    if (fizz && buzz) {
        while (cnt < limit) {
            cnt++;
            if (cnt % fizz == 0 && cnt % buzz == 0) {
                fizzString += ' fizzbuzz';
            } else if (cnt % buzz == 0) {
                fizzString += ' buzz';
            } else if (cnt % fizz == 0) {
                fizzString += ' fizz';
            } else {
                fizzString += ' ' + cnt;
            }
        }
        console.log(fizzString);
        errMessage.innerHTML = '';
        output.innerHTML = fizzString;
        cnt = 0;
        fizzString = '';
        console.log("with While :O");

    } else {
        console.log("choose fizz and buzz please");
        errMessage.innerHTML = "choose fizz and buzz please";
    }
}

var test = () => {
    cnt = 15;
    let output = document.getElementById('output');

    if ((cnt % 3 && cnt % 5) == 0) {
        console.log("fizzbuzz");
        output.innerHTML = 'fizzbuzz';
    }
    cnt = 0;
}

var getInputValue = () => {
    let output = document.getElementById('output');
    output.innerHTML = document.getElementById("fizz").value;
    console.log(document.getElementById("fizz").value);
}