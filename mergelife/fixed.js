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

const selected = [];

shuffle(mutations);

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
    generateRules();
    changeFooterText();
    clearInputFields();

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
};

function generateRules() {
    var input1 = document.getElementById('firstImage').value;
    var input2 = document.getElementById('secondImage').value;

    var parent1 = mutations[input1 - 1];
    var parent2 = mutations[input2 - 1];

    var options = [0, 1, 2, 3, 5, 6, 7];
    shuffle(options);

    var parent1Split = parent1.split("-");
    var parent2Split = parent2.split("-");

    mutations[0] = parent1;
    mutations[4] = parent2;

    selected.push(parent1);
    selected.push(parent2);
    console.log(selected);

    generateCrossOvers(parent1Split, parent2Split, options);
    generateMutations(parent1, parent2);
    console.log(mutations);
}

function generateMutations(parent1, parent2) {
    // generate image 3
    var numberIndex = getRandomNumberIndex(parent1);
    var charIndex = getRandomCharIndex(parent1);

    var tmpNum = parent1.split('')[numberIndex];
    var tmpChar = parent1.split('')[charIndex];

    var image = parent1.split('');
    image[numberIndex] = tmpChar;
    image[charIndex] = tmpNum;

    mutations[2] = image.join('');

    // generate image 7
    numberIndex = getRandomNumberIndex(parent2);
    charIndex = getRandomCharIndex(parent2);

    tmpNum = parent2.split('')[numberIndex];
    tmpChar = parent2.split('')[charIndex];

    image = parent2.split('');
    image[numberIndex] = tmpChar;
    image[charIndex] = tmpNum;

    mutations[6] = image.join('');
}

function getRandomNumberIndex(mergeRule) {
    var rules = mergeRule.split('');

    var randomIndex = -1;

    while(true) {
        randomIndex = Math.floor(Math.random() * rules.length);
        if(!isNaN(rules[randomIndex])) {
            return randomIndex;
        }
    }
}

function getRandomCharIndex(mergeRule) {
    var rules = mergeRule.split('');

    var randomIndex = -1;

    while(true) {
        randomIndex = Math.floor(Math.random() * rules.length);

        if(rules[randomIndex] != "-" && isNaN(rules[randomIndex])) {
            return randomIndex;
        }
    }
}

function generateCrossOvers(parent1Split, parent2Split, options) {
    // generate image 2
    var mutation = "";
    for(var i = 0; i < 8; i++) {
        if (i == options[0]) {
            mutation += parent2Split[i] + "-";
        } else {
            mutation += parent1Split[i] + "-";
        }
        
    }

    mutations[1] = mutation.substr(0, mutation.length - 1);

    // generate image 6
    mutation = "";
    // generate second crossover
    for(var i = 0; i < 8; i++) {
        if (i == options[0]) {
            mutation += parent1Split[i] + "-";
        } else {
            mutation += parent2Split[i] + "-";
        }
    }

    mutations[5] = mutation.substr(0, mutation.length - 1);

    // generate image 4
    mutation = "";
    // generate second crossover
    for(var i = 0; i < 8; i++) {
        if (i == options[1]) {
            mutation += parent2Split[i] + "-";
        } else {
            mutation += parent1Split[i] + "-";
        }
    }

    mutations[3] = mutation.substr(0, mutation.length - 1);

    // generate image 8
    mutation = "";
    // generate second crossover
    for(var i = 0; i < 8; i++) {
        if (i == options[1]) {
            mutation += parent1Split[i] + "-";
        } else {
            mutation += parent2Split[i] + "-";
        }
    }

    mutations[7] = mutation.substr(0, mutation.length - 1);

}

function clearInputFields() {
    document.getElementById('firstImage').value = "";
    document.getElementById('secondImage').value = "";
}

function changeFooterText() {
    count++;
    document.getElementById('random-counter').innerText = "" + count + " out of 10";

    if (count > 10) {
        var rules = "Selected Rules: \n\n";

        for(var i = 1; i <= selected.length; i++) {
            rules += "" + i + ". " + selected[i - 1] + "\n";
        }
        alert(rules);
        console.log(rules);
        //window.location.replace("");
        location.href = 'fixed-survey.html';
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

    refreshCanvas();
});