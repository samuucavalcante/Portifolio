const convertToFahrenheit = (celsius: string) => {
    const celsiusToNumber = Number(celsius);

    const fahrenheit = celsiusToNumber * 9/5 + 32

    return fahrenheit.toFixed(0).toString();
}

export default convertToFahrenheit;