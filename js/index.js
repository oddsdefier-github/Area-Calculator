const calculatorForm = document.getElementById('calculatorForm');
const resultElement = document.getElementById('result');
const calculatorModal = document.getElementById("calc-modal");
const calculatorToggle = document.getElementById("show-calc");
let themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
let themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
let themeToggleBtn = document.getElementById('theme-toggle');
calculatorModal.style.display = "none";


function resetInput() {
    calculatorForm.reset();
    resultElement.innerHTML = "Enter the length and width of a rectangle.";
}

function areaRect(length, width) {
    const area = length * width;
    const roundedArea = area % 1 === 0 ? area : area.toFixed(2);
    resultElement.innerHTML = `<span class="py-5">Area = Length &times; Width <br> Area = ${length} &times; ${width} <br> <span class="dark:text-yellow-100 ">Area = <span class="font-bold">${roundedArea}</span></span></span>`;
    resultElement.classList.add("animate-result");
    return roundedArea;
}

calculatorForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const lengthRect = parseFloat(document.getElementById('length').value);
    const widthRect = parseFloat(document.getElementById('width').value);
    areaRect(lengthRect, widthRect);
    calculatorForm.reset();
    resultElement.classList.remove("flex", "items-center", "justify-center");
    setTimeout(function () {
        resultElement.classList.remove("animate-result");
    }, 1000)

});


calculatorToggle.addEventListener("click", function () {
    if (calculatorModal.style.display == "none") {
        calculatorToggle.classList.remove("bounce");
        calculatorModal.classList.remove("hide-modal");
        calculatorModal.classList.add("show-modal");
        calculatorModal.style.display = "block";
        setTimeout(function () {
            calculatorModal.classList.remove("show-modal");
        }, 400)
    } else {
        calculatorModal.classList.add("hide-modal");
        setTimeout(function () {
            calculatorModal.style.display = "none";
        }, 400)
        setTimeout(function () {
            calculatorToggle.classList.add("bounce");
        }, 400)
    }
})


if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

themeToggleBtn.addEventListener('click', function () {

    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
});


