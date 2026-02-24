window.addEventListener('load', function () {
    'use strict';
    const sliderContent = document.querySelector('.a');

    // How wide is the original set of images?
    const sliderWidth = sliderContent.offsetWidth;

    // clone the set of images and assign them the class name of '.b'
    const cloned = sliderContent.cloneNode(true);
    cloned.className = "b";

    // add the clone to the DOM
    document.querySelector('.slider').appendChild(cloned);

    //get the :root element
    let root = document.querySelector(':root');

    // set the end of the translateX based on the width of the slider
    const endLeftPos = `-${sliderWidth}px`;
    root.style.setProperty('--sliderwidth', endLeftPos);

    //Add the animate class to start animating the slider
    document.querySelector('.slider').classList.add("animate");

    
});

document.addEventListener('mousemove', reportPos);
const theImg = document.querySelector('.animation1 img');
let prevLoc = 0;

function reportPos(event) {
    const imgRect = theImg.getBoundingClientRect();
    const imgWidth = imgRect.width;
    const imgLeft = imgRect.left;
    const percent2px = imgWidth / 17;
    const xPos = event.clientX - imgLeft;
    const changePhoto = Math.floor(xPos / percent2px) + 1;

    if (changePhoto != prevLoc && changePhoto >= 1 && changePhoto <= 17) {
        theImg.src = `images/a${changePhoto}.jpg`;
        prevLoc = changePhoto;
        console.log(changePhoto);
    }
}