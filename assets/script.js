// Select Two Input 
const celsiusInput =  document.querySelector('.celciusInput');
const fahrenInput = document.querySelector('.fahrenheitInput');

// Add event 
celsiusInput.onkeyup = () => {
    toCelsius();
};

// Function for convert celcius to fahrenheit
const toCelsius = () => {
    const celsiusInputValue = celsiusInput.value; 
    let celsiusCalculation = Number(((celsiusInputValue * 9/5) + 32).toFixed(2));
    fahrenInput.value = celsiusCalculation;
};

// Add event 
fahrenInput.onkeyup = () => {
    toFahrenheit()
};

// Function for convert fahrenheit to celcius
const toFahrenheit = () => {
    const fahrenInputValue = fahrenInput.value; 
    const fahrenCalculation = Number(((fahrenInputValue - 32) * 5/9).toFixed(2));
    celsiusInput.value = fahrenCalculation;
};