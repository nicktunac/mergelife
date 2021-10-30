function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const hexArray = [];

for(let i = 0; i < 80; i++) {
    var hexValue = "";
    for(let j = 0; j < 8; j++) {
        hexValue += Math.random().toString(16).slice(2, 6);
        if (j != 7) {
            hexValue += "-"
        }
    }
    hexArray.push(hexValue);
}

shuffle(hexArray);

var value1 = hexArray.pop();
var value2 = hexArray.pop();
var value3 = hexArray.pop();
var value4 = hexArray.pop();
var value5 = hexArray.pop();
var value6 = hexArray.pop();
var value7 = hexArray.pop();
var value8 = hexArray.pop();

const canvas1 = document.getElementById('canvas-1')
window.ml1 = new MergeLifeRender()
window.ml1.init({rule: value1, canvas: canvas1, cellSize: 2, controls: false, resetCount: 1000})
window.ml1.startAnimation()

const canvas2 = document.getElementById('canvas-2')
window.ml2 = new MergeLifeRender()
window.ml2.init({rule: value2, canvas: canvas2, cellSize: 2, controls: false, resetCount: 1000})
window.ml2.startAnimation()

const canvas3 = document.getElementById('canvas-3')
window.ml3 = new MergeLifeRender()
window.ml3.init({rule: value3, canvas: canvas3, cellSize: 2, controls: false, resetCount: 1000})
window.ml3.startAnimation()

const canvas4 = document.getElementById('canvas-4')
window.ml4 = new MergeLifeRender()
window.ml4.init({rule: value4, canvas: canvas4, cellSize: 2, controls: false, resetCount: 1000})
window.ml4.startAnimation()

const canvas5 = document.getElementById('canvas-5')
window.ml5 = new MergeLifeRender()
window.ml5.init({rule: value5, canvas: canvas5, cellSize: 2, controls: false, resetCount: 1000})
window.ml5.startAnimation()

const canvas6 = document.getElementById('canvas-6')
window.ml6 = new MergeLifeRender()
window.ml6.init({rule: value6, canvas: canvas6, cellSize: 2, controls: false, resetCount: 1000})
window.ml6.startAnimation()

const canvas7 = document.getElementById('canvas-7')
window.ml7 = new MergeLifeRender()
window.ml7.init({rule: value7, canvas: canvas7, cellSize: 2, controls: false, resetCount: 1000})
window.ml7.startAnimation()

const canvas8 = document.getElementById('canvas-8')
window.ml8 = new MergeLifeRender()
window.ml8.init({rule: value8, canvas: canvas8, cellSize: 2, controls: false, resetCount: 1000})
window.ml8.startAnimation()

function refreshCanvas(selected) {
    if(hexArray.length < 8) {
        alert("Go to survey");
        return;
    }

    value1 = hexArray.pop();
    value2 = hexArray.pop();
    value3 = hexArray.pop();
    value4 = hexArray.pop();
    value5 = hexArray.pop();
    value6 = hexArray.pop();
    value7 = hexArray.pop();
    value8 = hexArray.pop();

    window.ml1.init({rule: value1, canvas: canvas1, cellSize: 2, controls: false, resetCount: 1000});
    window.ml1.startAnimation();

    window.ml2.init({rule: value2, canvas: canvas2, cellSize: 2, controls: false, resetCount: 1000});
    window.ml2.startAnimation();

    window.ml3.init({rule: value3, canvas: canvas3, cellSize: 2, controls: false, resetCount: 1000});
    window.ml3.startAnimation();

    window.ml4.init({rule: value4, canvas: canvas4, cellSize: 2, controls: false, resetCount: 1000});
    window.ml4.startAnimation();

    window.ml5.init({rule: value5, canvas: canvas5, cellSize: 2, controls: false, resetCount: 1000});
    window.ml5.startAnimation();

    window.ml6.init({rule: value6, canvas: canvas6, cellSize: 2, controls: false, resetCount: 1000});
    window.ml6.startAnimation();

    window.ml7.init({rule: value7, canvas: canvas7, cellSize: 2, controls: false, resetCount: 1000});
    window.ml7.startAnimation();

    window.ml8.init({rule: value8, canvas: canvas8, cellSize: 2, controls: false, resetCount: 1000});
    window.ml8.startAnimation();

    clearInputFields();
    changeFooterText();
};

function clearInputFields() {
    document.getElementById('firstImage').value = "";
    document.getElementById('secondImage').value = "";
}

function changeFooterText() {
    var remaining = (80 - hexArray.length)/8;
    document.getElementById('random-counter').innerText = "" + remaining + " out of 10";

    if (remaining == 10) {
        location.href = 'random-survey.html';
    }
}

const confirmButton = document.getElementById('confirm-random');

confirmButton.addEventListener("click", function(event) {
    var input1 = document.getElementById('firstImage').value;
    var input2 = document.getElementById('secondImage').value;

    if (input1 == "" || input2 == "") {
        alert("Please enter your selections first");
        return;
    }

    if (isNaN(input1) || isNaN(input2)) {
        alert("Please enter a valid number");
        return;
    }

    const selections = ["1", "2", "3" , "4" ,"5" ,"6" ,"7", "8"];
    if (!selections.includes(input1) || !selections.includes(input2)) {
        alert("Please choose 2 images from image 1 to 8 only.");
        return;
    }

    if (input1 == input2) {
        alert("Image selections must not be the same image number.");
        return;
    }


    refreshCanvas(value1);
});