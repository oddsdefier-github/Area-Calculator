
const calculatorForm = document.getElementById('calculatorForm');
const resultElement = document.getElementById('result');


calculatorForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const lengthRect = parseFloat(document.getElementById('length').value);
    const widthRect = parseFloat(document.getElementById('width').value);
    areaRect(lengthRect, widthRect);
    calculatorForm.reset(); // Clear form values
});

function areaRect(length, width) {
    const area = length * width;
    const roundedArea = area % 1 === 0 ? area : area.toFixed(2);
    resultElement.innerHTML = `The area of rectangle is: ${roundedArea}`;
    return roundedArea;
}

const calculatorModal = document.getElementById("calc-modal")
const calculatorToggle = document.getElementById("show-calc")
calculatorModal.style.display = "none";

calculatorToggle.addEventListener("click", function () {
    if (calculatorModal.style.display == "none") {
        calculatorModal.style.display = "block";
    } else {
        calculatorModal.style.display = "none";
    }
})



let themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
let themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

let themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function () {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

        // if NOT set via local storage previously
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


