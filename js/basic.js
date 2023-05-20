const showCalculator = document.getElementById("show-calc");
const computedArea = document.getElementById("result");

function areaRect(length, width) {
    if (isNaN(length) || isNaN(width)) {
        computedArea.innerHTML = `<div class="flex items-center justify-center gap-2 rounded-lg bg-yellow-50 p-4 border border-yellow-200">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="h-5 w-5 stroke-yellow-900">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
        <div class="text-yellow-800 text-sm" role="alert"><span class="font-medium">Error:</span> Please enter valid numeric values for length and width.</div>
    </div>`;
    } else {
        let area = length * width;
        computedArea.innerHTML = `<span class="font-semibold">Rectangle</span><br> Length = ${length} | Width = ${width} <br><br> Area = Length * Width <br> Area = ${length} * ${width} <br> <span class="font-bold">Area = ${area}</span>`;
    }
}



showCalculator.addEventListener("click", function () {
    let lengthRect = +(prompt("Length of Rectangle", "Enter the Length of the Rectangle"));
    let widthRect = +(prompt("Width of Rectangle", "Enter the Width of the Rectangle"));
    areaRect(lengthRect, widthRect);
})