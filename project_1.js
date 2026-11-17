let list = [
    "The utility of a thing makes it a use value.",
    "Its existence as a material thing is put out of sight.",
    "Lastly nothing can have value, without being an object of utility.",
    "The simple commodity form is therefore the germ of the money form.",
    "Value, therefore, does not stalk about with a label describing what it is.",
    "Commodities are things, and therefore without power of resistance against man.",
    "Custom stamps them as values with definite magnitudes.",
    "The problem and the means of solution arise simultaneously."
];

let box = document.getElementById("sentence");
let inp = document.getElementById("typing");
let res = document.getElementById("result");
let btn = document.getElementById("restart");

let text = "";
let time = 0;

function go() {
    let num = Math.floor(Math.random() * list.length);
    text = list[num];
    time = 0;

    inp.value = "";
    inp.disabled = false;
    inp.focus();

    check();
    show(0, 0, 0);
}

function check() {
    let t = inp.value;
    box.innerHTML = "";

    for (let i = 0; i < text.length; i++) {
        let s = document.createElement("span");
        s.textContent = text[i];

        if (i < t.length) {
            if (t[i] == text[i]) {
                s.style.color = "green";
            } else {
                s.style.color = "red";
            }
        }

        box.appendChild(s);
    }
}

function show(a, b, c) {
    res.innerHTML =
        "<p>타수: " + a + "</p>" +
        "<p>정확도: " + b + "%</p>" +
        "<p>시간: " + c + "초</p>";
}

inp.addEventListener("input", function () {
    if (time == 0) {
        time = Date.now();
    }

    check();

    let t = inp.value;

    if (t.length >= text.length) {
        let sec = (Date.now() - time) / 1000;

        let cnt = 0;
        for (let i = 0; i < text.length; i++) {
            if (t[i] == text[i]) {
                cnt++;
            }
        }

        let tasu = Math.round(cnt / sec * 60);
        let acc = Math.round(cnt / text.length * 100);

        show(tasu, acc, sec.toFixed(1));
        inp.disabled = true;
    }
});

btn.addEventListener("click", go);

go();
