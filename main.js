document.getElementById("tempConverter").addEventListener("submit", function (event) {
    event.preventDefault();

    const degree = parseFloat(document.getElementById("degree").value);
    const unit = document.getElementById("unit").value;
    const convertIn = document.getElementById("convertIn").value;

    let convertedValue;
    if (unit === "C" && convertIn === "F") {
        convertedValue = (degree * 9/5) + 32; // To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32.
    } else if (unit === "F" && convertIn === "C") {
        convertedValue = (degree - 32) * 5/9; // To convert temperatures in degrees Fahrenheit to Celsius, subtract 32 and multiply by .5556 (or 5/9).
    } else {
        convertedValue = degree;
    }

    document.getElementById("resultValue").textContent = convertedValue.toFixed(2);
    document.getElementById("resultUnit").textContent = `${convertIn}`;
})