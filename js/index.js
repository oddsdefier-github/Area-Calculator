const calculatorForm = document.getElementById('calculatorForm');
const resultElement = document.getElementById('result');
const calculatorModal = document.getElementById("calc-modal");
const calculatorToggle = document.getElementById("show-calc");
let themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
let themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
let themeToggleBtn = document.getElementById('theme-toggle');



calculatorForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const lengthRect = parseFloat(document.getElementById('length').value);
    const widthRect = parseFloat(document.getElementById('width').value);
    areaRect(lengthRect, widthRect);
    calculatorForm.reset();
    setTimeout(function () {
        resultElement.classList.remove("animate-result");
    }, 1000)
});

function resetInput() {
    calculatorForm.reset();
}

function areaRect(length, width) {
    const area = length * width;
    const roundedArea = area % 1 === 0 ? area : area.toFixed(2);
    resultElement.innerHTML = `<span class="dark:text-yellow-100 ">Area = <span class="font-bold">${roundedArea}</span> </span>`;
    resultElement.classList.add("animate-result");
    return roundedArea;
}


calculatorModal.style.display = "none";
calculatorToggle.addEventListener("click", function () {
    if (calculatorModal.style.display == "none") {
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

    }
})


// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

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


