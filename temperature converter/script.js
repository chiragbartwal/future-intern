function convertToCelsius() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("result").innerHTML = celsius + " Celsius = " + fahrenheit.toFixed(2) + " Fahrenheit";
}

function convertToFahrenheit() {
    var fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    var celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("result").innerHTML = fahrenheit + " Fahrenheit = " + celsius.toFixed(2) + " Celsius";
}