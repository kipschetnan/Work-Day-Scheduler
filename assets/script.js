$("#currentDay").text(moment().format("dddd, MMMM Do"));
var currentTime = new Date().getHours();

function nineAm() {
    var nineAm = document.getElementById('9am');
    var btn = getElementById('9amBtn');


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
    
    if (currentTime < 12) {
        twelvePm.classList.add('future');
    } else if (currentTime == 12) {
        twelvePm.classList.add('present');
    } else if (currentTime > 12) {
        twelvePm.classList.add('past')
    }
}

function twelvePm() {
    var twelvePm = document.getElementById('12pm');
    
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
    
    if (currentTime < 17) {
        fivePm.classList.add('future');
    } else if (currentTime == 17) {
        fivePm.classList.add('present');
    } else if (currentTime > 17) {
        fivePm.classList.add('past')
    }
}

function timeBlockColor() {
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
timeBlockColor();

