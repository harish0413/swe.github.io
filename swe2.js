// document.addEventListener("DOMContentLoaded", function () {
//     const leftImageList = document.querySelector('.left-gallery .image-list');
//     const rightImageList = document.querySelector('.right-gallery .image-list');

//     // Populate left and right galleries with images
//     for (let i = 1; i <= 50; i++) {
//         const imgSrc = `images/image${i}.jpg`; // Adjust the path as needed
//         const img = document.createElement('img');
//         img.src = imgSrc;
//         leftImageList.appendChild(img.cloneNode(true));
//         rightImageList.appendChild(img.cloneNode(true));
//     }
// });

// =======================================


var light = document.querySelector('.light');

var px = 0;
var py = 0;

var touches = [];

window.addEventListener('mousemove', follow, false);
window.addEventListener('touchmove', follow, false);

function follow(event) {

    px = event.pageX;
    py = event.pageY;

    if (px == null || py == null) {
        touches = event.touches;
        px = touches[0].pageX;
        py = touches[0].pageY;
    }

    for (var i = 0; i < 20; i++) {

        light.style.transform = 'translate(' + px + 'px, ' + py + 'px) rotate(25deg)';

    }

}
// ========================================


let x = document.getElementById("birthday_song");
x.onended = function () {
    $('.girl').removeClass('dance');
    $('.boy').removeClass('dance');
    window.location.href = "swe3.html";
};

/* Comment the below line to mute the audio*/
x.play();

$blow = $('.girl .mouth .blow');
$grin = $('.girl .mouth .teeth');
$song = $('#birthday_song');

const flyDown = resume => {
    $('.boy').css({ top: '-10px' });
    resume();
};

const blowCandle = resume => {
    $blow.css({ visibility: 'visible' });
    resume();
};

const miscEffects = resume => {
    $blow.css({
        visibility: 'hidden'
    });


    $grin.css({
        visibility: 'visible'
    });


    $('.lit').addClass('off');
    $('.girl').addClass('dance');
    $('.boy').addClass('dance');

    resume();
};

const delay = (time, callback) => {
    setTimeout(function () {
        callback();
    }, time);
};

const run = generatorFunction => {
    var generatorItr = generatorFunction(resume);
    function resume(callbackValue) {
        generatorItr.next(callbackValue);
    }
    generatorItr.next();
};


run(function* generatorFunction(resume) {
    yield delay(3000, flyDown.bind(this, resume));
    yield delay(5200, blowCandle.bind(this, resume));
    yield delay(100, miscEffects.bind(this, resume));
});