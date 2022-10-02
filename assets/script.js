$("#currentDay").text(moment().format("dddd, MMMM Do"));
var currentTime = new Date().getHours();

function inputText(btn, time, key) {
    time.value = localStorage.getItem(key);
    btn.addEventListener('click', function () {

    localStorage.setItem(key, time.value);

    });
}

function nineAm() {
    var nineAm = document.getElementById('9am');
    var btn = document.getElementById('9amBtn');
    var key = '9';

    inputText(btn, nineAm, key);
    
    if (currentTime < 9) {
        nineAm.classList.add('future');
    } else if (currentTime == 9) {
        nineAm.classList.add('present');
    } else if (currentTime > 9) {
        nineAm.classList.add('past')
    }

}

function tenAm() {
    var tenAm = document.getElementById('10am');
    var btn = document.getElementById('10amBtn');
    var key = '10';
    inputText(btn, tenAm, key);

    if (currentTime < 10) {
        tenAm.classList.add('future');
    } else if (currentTime == 10) {
        tenAm.classList.add('present');
    } else if (currentTime > 10) {
        tenAm.classList.add('past')
    }
}

function elevenAm() {
    var elAm = document.getElementById('11am');
    var btn = document.getElementById('11amBtn');
    var key = '11';
    inputText(btn, elAm, key);

    if (currentTime < 11) {
        elAm.classList.add('future');
    } else if (currentTime == 11) {
        elAm.classList.add('present');
    } else if (currentTime > 11) {
        elAm.classList.add('past')
    }
}

function twelvePm() {
    var twelvePm = document.getElementById('12pm');
    var btn = document.getElementById('12pmBtn');
    var key = '12';
    inputText(btn, twelvePm, key);

    if (currentTime < 12) {
        twelvePm.classList.add('future');
    } else if (currentTime == 12) {
        twelvePm.classList.add('present');
    } else if (currentTime > 12) {
        twelvePm.classList.add('past')
    }
}

function onePm() {
    var onePm = document.getElementById('1pm');
    var btn = document.getElementById('1pmBtn');
    var key = '1';
    inputText(btn, onePm, key);

    if (currentTime < 13) {
        onePm.classList.add('future');
    } else if (currentTime == 13) {
        onePm.classList.add('present');
    } else if (currentTime > 13) {
        onePm.classList.add('past')
    }
}

function twoPm() {
    var twoPm = document.getElementById('2pm');
    var btn = document.getElementById('2pmBtn');
    var key = '2';
    inputText(btn, twoPm, key);

    if (currentTime < 14) {
        twoPm.classList.add('future');
    } else if (currentTime == 14) {
        twoPm.classList.add('present');
    } else if (currentTime > 14) {
        twoPm.classList.add('past')
    }
}

function threePm() {
    var threePm = document.getElementById('3pm');
    var btn = document.getElementById('3pmBtn');
    var key = '3';
    inputText(btn, threePm, key);

    if (currentTime < 15) {
        threePm.classList.add('future');
    } else if (currentTime == 15) {
        threePm.classList.add('present');
    } else if (currentTime > 15) {
        threePm.classList.add('past')
    }
}

function fourPm() {
    var fourPm = document.getElementById('4pm');
    var btn = document.getElementById('4pmBtn');
    var key = '4';
    inputText(btn, fourPm, key);

    if (currentTime < 16) {
        fourPm.classList.add('future');
    } else if (currentTime == 16) {
        fourPm.classList.add('present');
    } else if (currentTime > 16) {
        fourPm.classList.add('past')
    }
}

function fivePm() {
    var fivePm = document.getElementById('5pm');
    var btn = document.getElementById('5pmBtn');
    var key = '5';
    inputText(btn, fivePm, key);

    if (currentTime < 17) {
        fivePm.classList.add('future');
    } else if (currentTime == 17) {
        fivePm.classList.add('present');
    } else if (currentTime > 17) {
        fivePm.classList.add('past')
    }
}

function timeBlock() {
    nineAm();
    tenAm();
    elevenAm();
    twelvePm();
    onePm();
    twoPm();
    threePm();
    fourPm();
    fivePm();
}
timeBlock();

