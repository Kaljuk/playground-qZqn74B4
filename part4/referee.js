let success = true;

function now() {
    return new Date().getTime();
}

let counter1 = 0,
    callback1Timer = now();

function callback1() {
    console.log('TECHIO> message callback1 called');

    if (counter1) {
        success = false;
        console.log('TECHIO> message callback1 called more than one time');
    }

    counter1 += 1;

    let time = now() - callback1Timer;

    if (time < 1800) {
        success = false;
        console.log('TECHIO> message callback1 called too early');
    } else if (time > 2200) {
        success = false;
        console.log('TECHIO> message callback1 called too late');
    }
}

let counter2 = 0,
    callback2Timer = now();

function callback2() {
    console.log('TECHIO> message callback2 called');

    if (counter2 >= 3) {
        success = false;
        console.log('TECHIO> message callback2 called more than three times');
    }

    counter2 += 1;

    let time = now() - callback2Timer;

    if (time < 800) {
        success = false;
        console.log('TECHIO> message callback2 called too early');
    } else if (time > 1200) {
        success = false;
        console.log('TECHIO> message callback2 called too late');
    }

    callback2Timer = now();
}

setTimeout(function() {
    if (counter1 < 1) {
        success = false;
        console.log('TECHIO> message callback1 never called');
    }

    if (counter2 < 3) {
        success = false;
        console.log('TECHIO> message callback2 called only ' + counter2 + ' times');
    }

    if (success) {
        console.log('TECHIO> message Congratulation !');
    }

    console.log('TECHIO> success ' + success);
    process.exit();
}, 6000);

require('./code.js')(callback1, callback2);