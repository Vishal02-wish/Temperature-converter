function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById('temp-input').value);
    const fromUnit = document.getElementById('temp-unit').value;
    const toUnit = document.getElementById('convert-to').value;

    if (isNaN(inputTemp)) {
        alert("Please enter a valid temperature.");
        return;
    }

    let result;

    if (fromUnit === toUnit) {
        result = inputTemp;
    } else if (fromUnit === 'celsius') {
        if (toUnit === 'fahrenheit') {
            result = (inputTemp * 9/5) + 32;
        } else if (toUnit === 'kelvin') {
            result = inputTemp + 273.15;
        }
    } else if (fromUnit === 'fahrenheit') {
        if (toUnit === 'celsius') {
            result = (inputTemp - 32) * 5/9;
        } else if (toUnit === 'kelvin') {
            result = ((inputTemp - 32) * 5/9) + 273.15;
        }
    } else if (fromUnit === 'kelvin') {
        if (toUnit === 'celsius') {
            result = inputTemp - 273.15;
        } else if (toUnit === 'fahrenheit') {
            result = (inputTemp - 273.15) * 9/5 + 32;
        }
    }

    document.getElementById('result').innerHTML = `Result: ${result.toFixed(2)}° ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`;
}

function swapUnits() {
    const fromUnit = document.getElementById('temp-unit');
    const toUnit = document.getElementById('convert-to');
    
    // Swap the selected values
    const tempValue = fromUnit.value;
    fromUnit.value = toUnit.value;
    toUnit.value = tempValue;
}

function clearFields() {
    document.getElementById('temp-input').value = '';
    document.getElementById('result').innerHTML = '';
}
