const tabItem = document.querySelectorAll('.tab-item');
const tabContentItem = document.querySelectorAll('.tab-content');


const images = [];
var i = 1,
    j = 1;

const time = 4000;
const timeOther = 2000;
images[0] = "./img/g4.jpg";
images[1] = "./img/g1.jpg";
images[2] = "./img/g2.jpg";
images[3] = "./img/g3.jpg";
images[4] = "./img/profile.jpg";
images[5] = "./img/g5.jpg";

function changeImage() {
    document.getElementById("imageSlide-1").src = images[i - 1];
    document.getElementById("imageSlide-2").src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 1;
    }
    setTimeout("changeImage()", time);
}

function changeImageOther() {
    document.getElementById("imageSlide-3").src = images[j - 1];
    document.getElementById("imageSlide-4").src = images[j];

    if (j < images.length - 1) {
        j++;
    } else {
        j = 1;
    }
    setTimeout("changeImageOther()", timeOther);
}
changeImage();
changeImageOther()

function selectItem(e) {
    removeBorder();
    removeShow();
    this.classList.add('tab-border');
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItem.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItem.forEach(item => item.classList.remove('show'));
}
tabItem.forEach(item => item.addEventListener('click', selectItem));