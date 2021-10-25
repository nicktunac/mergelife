function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const mutations = [];
var count = 1;

for(let i = 0; i < 8; i++) {
    var hexValue = "";
    for(let j = 0; j < 8; j++) {
        hexValue += Math.random().toString(16).slice(2, 6);
        if (j != 7) {
            hexValue += "-"
        }
    }
    mutations.push(hexValue);
}

shuffle(mutations);
console.log(mutations);

const canvas1 = document.getElementById('canvas-1')
window.ml1 = new MergeLifeRender()
window.ml1.init({rule: mutations[0], canvas: canvas1, cellSize: 2, controls: false, resetCount: 1000})
window.ml1.startAnimation()

const canvas2 = document.getElementById('canvas-2')
window.ml2 = new MergeLifeRender()
window.ml2.init({rule: mutations[1], canvas: canvas2, cellSize: 2, controls: false, resetCount: 1000})
window.ml2.startAnimation()

const canvas3 = document.getElementById('canvas-3')
window.ml3 = new MergeLifeRender()
window.ml3.init({rule: mutations[2], canvas: canvas3, cellSize: 2, controls: false, resetCount: 1000})
window.ml3.startAnimation()

const canvas4 = document.getElementById('canvas-4')
window.ml4 = new MergeLifeRender()
window.ml4.init({rule: mutations[3], canvas: canvas4, cellSize: 2, controls: false, resetCount: 1000})
window.ml4.startAnimation()

const canvas5 = document.getElementById('canvas-5')
window.ml5 = new MergeLifeRender()
window.ml5.init({rule: mutations[4], canvas: canvas5, cellSize: 2, controls: false, resetCount: 1000})
window.ml5.startAnimation()

const canvas6 = document.getElementById('canvas-6')
window.ml6 = new MergeLifeRender()
window.ml6.init({rule: mutations[5], canvas: canvas6, cellSize: 2, controls: false, resetCount: 1000})
window.ml6.startAnimation()

const canvas7 = document.getElementById('canvas-7')
window.ml7 = new MergeLifeRender()
window.ml7.init({rule: mutations[6], canvas: canvas7, cellSize: 2, controls: false, resetCount: 1000})
window.ml7.startAnimation()

const canvas8 = document.getElementById('canvas-8')
window.ml8 = new MergeLifeRender()
window.ml8.init({rule: mutations[7], canvas: canvas8, cellSize: 2, controls: false, resetCount: 1000})
window.ml8.startAnimation()

function refreshCanvas() {
    generateMutations();

    window.ml1.init({rule: mutations[0], canvas: canvas1, cellSize: 2, controls: false, resetCount: 1000});
    window.ml1.startAnimation();

    window.ml2.init({rule: mutations[1], canvas: canvas2, cellSize: 2, controls: false, resetCount: 1000});
    window.ml2.startAnimation();

    window.ml3.init({rule: mutations[2], canvas: canvas3, cellSize: 2, controls: false, resetCount: 1000});
    window.ml3.startAnimation();

    window.ml4.init({rule: mutations[3], canvas: canvas4, cellSize: 2, controls: false, resetCount: 1000});
    window.ml4.startAnimation();

    window.ml5.init({rule: mutations[4], canvas: canvas5, cellSize: 2, controls: false, resetCount: 1000});
    window.ml5.startAnimation();

    window.ml6.init({rule: mutations[5], canvas: canvas6, cellSize: 2, controls: false, resetCount: 1000});
    window.ml6.startAnimation();

    window.ml7.init({rule: mutations[6], canvas: canvas7, cellSize: 2, controls: false, resetCount: 1000});
    window.ml7.startAnimation();

    window.ml8.init({rule: mutations[7], canvas: canvas8, cellSize: 2, controls: false, resetCount: 1000});
    window.ml8.startAnimation();

    clearInputFields();
    changeFooterText();
};

function generateMutations() {
    var input1 = document.getElementById('firstImage').value;
    var input2 = document.getElementById('secondImage').value;

    var tmpParent1 = mutations[input1 - 1];
    var tmpParent2 = mutations[input2 - 1];

    mutations[input1 - 1] = tmpParent1.substr(0, 30) + tmpParent2.split("-")[6] + "-" + tmpParent1.split("-")[7];
    mutations[input2 - 1] = tmpParent2.substr(0, 30) + tmpParent1.split("-")[6] + "-" + tmpParent2.split("-")[7];

    console.log(mutations[input1 -1]);

    const remaining = [];
    for(var i = 0; i < 8; i++) {
        if(i != input1 - 1 && i != input2 - 1) {
            remaining.push(i);
        }
    }

    shuffle(remaining);

    var offspring1 = tmpParent1.substr(0,3) + tmpParent1.split("-")[2].substr(3) + tmpParent1.substr(4,9) + tmpParent1.split("-")[0].substr(3) + tmpParent1.substr(14);
    var offspring2 = tmpParent2.substr(0,3) + tmpParent2.split("-")[2].substr(3) + tmpParent2.substr(4,9) + tmpParent2.split("-")[0].substr(3) + tmpParent2.substr(14);

    mutations[remaining[0]] = offspring1;
    mutations[remaining[1]] = offspring2;

    var tmpParent2 = mutations[remaining[2]];
    var tmpParent3 = mutations[remaining[3]];

    mutations[remaining[2]] = tmpParent2.substr(0, 30) + tmpParent3.split("-")[6] + "-" + tmpParent2.split("-")[7];
    mutations[remaining[3]] = tmpParent3.substr(0, 30) + tmpParent2.split("-")[6] + "-" + tmpParent3.split("-")[7];

    var tmpParent4 = mutations[remaining[4]];
    var tmpParent5 = mutations[remaining[5]];

    mutations[remaining[4]] = tmpParent4.substr(0, 30) + tmpParent5.split("-")[6] + "-" + tmpParent4.split("-")[7];
    mutations[remaining[5]] = tmpParent5.substr(0, 30) + tmpParent4.split("-")[6] + "-" + tmpParent5.split("-")[7];

    console.log(mutations);
}

function clearInputFields() {
    document.getElementById('firstImage').value = "";
    document.getElementById('secondImage').value = "";
}

function changeFooterText() {
    count++;
    document.getElementById('random-counter').innerText = "" + count + " out of 10";

    if (count == 10) {
        window.location.replace("");
        location.href = 'fixed-survey.html';
    }
}

const confirmButton = document.getElementById('confirm-random');

confirmButton.addEventListener("click", function(event) {
    var input1 = document.getElementById('firstImage').value;
    var input2 = document.getElementById('secondImage').value;

    if (isNaN(input1) || isNaN(input2)) {
        alert("Please enter a valid number");
        return;
    }

    if (input1 == input2) {
        alert("Image must not be the same");
        return;
    }

    refreshCanvas();
});