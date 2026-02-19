document.addEventListener('mousemove', reportPos);
const theImg = document.querySelector('img');
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
